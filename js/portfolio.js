console.log("JavaScript Loaded");
const topBtn = document.getElementById("top_btn");

window.addEventListener("scroll", () => {

    console.log("Scroll:", window.scrollY);

    if (window.scrollY > 300) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior: "smooth"

    });

});