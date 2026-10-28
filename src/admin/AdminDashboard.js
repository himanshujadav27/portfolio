
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      const token = sessionStorage.getItem("adminToken");

      if (!token) {
        navigate("/admin/login", { replace: true });
        return;
      }

      try {
        const response = await fetch(
          "https://personal-portfolio-tbfu.onrender.com/api/contacts",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (response.status === 401 || response.status === 403) {
          sessionStorage.removeItem("adminToken");
          navigate("/admin/login", { replace: true });
          return;
        }

        if (!response.ok) {
          throw new Error(data.message || "Could not load messages.");
        }

        setContacts(data.contacts || []);
      } catch (err) {
        setError(
          err.message === "Failed to fetch"
            ? "Cannot connect to the backend. Check that it is running."
            : err.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("adminToken");
    navigate("/admin/login", { replace: true });
  };

  return (
    <main className="admin-page">
      <section className="admin-dashboard">
        <header className="admin-dashboard-header">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Portfolio contact messages</p>
          </div>

          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </header>

        <h2>Contact Messages ({contacts.length})</h2>

        {loading && <p>Loading messages...</p>}
        {error && <p className="admin-error" role="alert">{error}</p>}

        {!loading && !error && contacts.length === 0 && (
          <p>No contact messages yet.</p>
        )}

        {!loading && !error && contacts.length > 0 && (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Date</th>
                </tr> 
              </thead>

              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact._id}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.message}</td>
                    <td>
                      {contact.createdAt
                        ? new Date(contact.createdAt).toLocaleString()
                        : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
