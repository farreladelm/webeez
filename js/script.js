const cards = document.getElementsByClassName("card");
const hamburger = document.getElementById("ham-menu");
const navbar = document.getElementById("nav-sm");

const navLinks = document.querySelectorAll(".nav-sm .nav-links ul li a") 

for(const card of cards) {
    card.addEventListener("click", () => {
        card.children[0].classList.toggle("active");
        card.children[1].classList.toggle("active");
        console.log(card.children)
    })
}

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
})

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navbar.classList.remove("active");
        navLinks.forEach((i) => {
            i.classList.remove("active");
            i.classList.remove("in-neu");
        })
        link.classList.toggle("active");
        link.classList.toggle("in-neu");
    })
})

