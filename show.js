const HomeBtn = document.getElementById("home-btn");
const Contcactbtn = document.getElementById("contact-btn");
const ContactPage = document.getElementById("new-contact");
const HomePage = document.getElementById("my-page");
const AuctionPage = document.getElementById("my-auctions");

HomeBtn.addEventListener("click", () => {
    ContactPage.classList.add("hide");
    HomePage.classList.remove("hide");
    AuctionPage.classList.remove("hide");
})

Contcactbtn.addEventListener("click", () => {
    ContactPage.classList.remove("hide");
    HomePage.classList.add("hide");
    AuctionPage.classList.add("hide");
})