const burgerButton = document.querySelector("burgerButton");
const navbarLinks = document.querySelector(".navbar-links ul");

burgerButton.addEventListener("click", () => {
	navbarLinks.classList.toggle("active");
});
