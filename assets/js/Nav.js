$(document).ready(function() {
    // Add indicator to all nav-links
    $('#side-nav .nav-link').each(function() {
        $(this).append(
            "<span class='nav-hover-indicator'><i class='fas fa-caret-left'></i></span>"
        )
    })

    // Pull out indicator on hover
    $('#side-nav .nav-link').hover(function() {
        $(this).find(".nav-hover-indicator").addClass('active');
    }, function() {
        $(this).find(".nav-hover-indicator").removeClass('active');
    })
});

function toggleNav() {
    var mobileNav = false;
    // Check if using mobile-nav or not
    if ($('.nav-open-button').css('display') === 'none'
    && $('.mobile-nav-button').css('display') !== 'none') {
        mobileNav = true;
    }

    // Open sidenav
    let nav = $("#side-nav");
    let navOpenBtn = mobileNav ? $('.mobile-nav-button .hamburger') : $('#nav-open-button');
    if (nav.hasClass("active")) {
        nav.removeClass("active");
        navOpenBtn.removeClass("is-active");
    } else {
        nav.addClass("active");
        navOpenBtn.addClass("is-active");
    }
}