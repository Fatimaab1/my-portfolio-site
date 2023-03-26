
function readMore() {
    const dots = document.getElementById("dots");
    const hiddenText = document.getElementById("hidden-text");
    const readMoreBtn = document.getElementById("read-more-btn");

    if (dots.style.display != "none") {
        dots.style.display = "none";
        hiddenText.style.display = "block";
        readMoreBtn.innerHTML = "Read Less";
    }
    else {
        dots.style.display = "block";
        hiddenText.style.display = "none";
        readMoreBtn.innerHTML = "Read More";
    }
}


const navbar = document.querySelector(".nav-bar");
const hamburgerIcon = document.querySelector(".nav-bar i");
const responsiveMenu = document.querySelector(".responsive-menu");

navbar.onclick = function () {
    responsiveMenu.classList.toggle('open');
    const isOpen = responsiveMenu.classList.contains('open');
    hamburgerIcon.classList = isOpen ? 'fa fa-times' : 'fa fa-bars';

}




