// js for toogle menu
    
var navLinks = document.getElementById("navLinks");
function showMenu()
{
    navLinks.style.right = "0";
}
function hideMenu()
{
    navLinks.style.right = "-200px";
}

// owl carousel script
$('.carousel').owlCarousel(
    {
        margin : 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    }
);