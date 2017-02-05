/**
 * Created by siryog on 27/12/16.
 */

/*header changing when scrolling*/
jQuery(window).bind('scroll', function () {
    if (jQuery(window).scrollTop() > 950) {
        jQuery('.my-nav').addClass('navbar-bg');
        jQuery('.logo').addClass('logo-small');
    } else {
        jQuery('.my-nav').removeClass('navbar-bg');
        jQuery('.logo').removeClass('logo-small');
    }
});

/*scrolling to the target*/

var topMenu = $(".my-menu");
  var topMenuHeight=topMenu.outerHeight();
var menuList=topMenu.find("a");

menuList.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+32;
    jQuery('html, body').stop().animate({
        scrollTop: offsetTop
    }, 1500);
    jQuery('.navbar-collapse').removeClass('in');
    e.preventDefault();
});

//sticky button
$(document).ready(function() {
    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });

    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 300);
    })
});