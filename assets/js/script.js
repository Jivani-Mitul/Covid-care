var navbar = $("#topnav");
var contactbars = $("#contactbars").height();

$(window).scroll(function () {
    if ($(this).scrollTop() > contactbars) {
        navbar.addClass("nav_sticky");
    }
    else {
        navbar.removeClass("nav_sticky");
    }
});