require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");


const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", apiRoutes);

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("My backend is working!");
});


mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("MongoDB connected successfully!");

        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    })
    .catch((error)=> {
        console.error("MongoDB connection failed:", error.message);
    });