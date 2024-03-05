let arrowTop = document.getElementById("btn-arrow");
window.onscroll = function () {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        arrowTop.style.display = "block";
    } else {
        arrowTop.style.display = "none";
    }
};

arrowTop.onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};