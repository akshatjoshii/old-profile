(function ($) {
    $(function () {
        // for banner height js
        aksJS.bannerSize();
        aksJS.onResize(function () {
            aksJS.bannerSize();
        });
        aksJS.portfolioFilter();
        aksJS.portfolioLightbox();
        aksJS.skillChart();
        aksJS.smoothScroll();
        aksJS.loadChart();
    })
}(jQuery));



(function ($) {
    (function($) {
        $(function() {
            jQuery('#loopedSlider').prepend("<a href='#' class='previous'>&lt;</a><a href='#' class='next'>&gt;</a>");
            jQuery('#loopedSlider').loopedSlider({
                autoHeight: 500
            });
        });
    });
})(jQuery);
