const toTopBtn = document.querySelector(".toTop");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
};

toTopBtn.onclick = function() {
    document.documentElement.scrollTop = 0;
};