const cards = document.getElementsByClassName("card");
const hamburger = document.getElementById("ham-menu");
const navbar = document.getElementById("nav-sm");

const navLinks = document.querySelectorAll(".nav-sm .nav-links ul li a");

const client1 = document.getElementById("client-1");
const client2 = document.getElementById("client-2");
const client3 = document.getElementById("client-3");

const images1 = ["./asset/client/1.png", "./asset/client/2.png", "./asset/client/3.png"];
const images2 = ["./asset/client/4.png", "./asset/client/5.png", "./asset/client/6.png"];
const images3 = ["./asset/client/7.png", "./asset/client/8.png", "./asset/client/9.png"];



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

setInterval(() => {
    let random = Math.floor(Math.random() * 3)
    client1.src = images1[random];
    client2.src = images2[random];
    client3.src = images3[random];
}, 2000)