// scroll to top
function scrollTopBack() {
    let scrollTopButton = document.querySelector("#scrollUp");
    window.onscroll = function () {
        var scroll = document.documentElement.scrollTop;
        if (scroll >= 250) {
            scrollTopButton.classList.add('scrollActive');
        } else {
            scrollTopButton.classList.remove('scrollActive');
        }
    }
}
scrollTopBack();
// end scroll to top

// nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show")
    })
})
// end nav hide