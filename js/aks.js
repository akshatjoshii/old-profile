var aksJS = (function ($) {
    var bannerSize = function () {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        $('.banner').css({'width': windowWidth, 'height': windowHeight - "60"});
    };
    var onResize = function (cb) {
        window.addEventListener("resize", cb);
    };
    var portfolioFilter = function () {
        // for portfoli filter jquary
        $(window).load(function () {
            var $container = $('.portfolioContainer');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

            $('.portfolioFilter a').click(function () {
                $('.portfolioFilter .current').removeClass('current');
                $(this).addClass('current');

                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        });
    };
    var portfolioLightbox = function () {
        // for portfolio lightbox jquery
        jQuery(function ($) {
            var $chosenSheet,
                $stylesheets = $("a[id^=theme-]");

            // run rlightbox
            $(".lb").rlightbox();
            $(".lb_title-overwritten").rlightbox({overwriteTitle: true});
        });
    };
    var skillChart = function () {
        //var windowBottom = $(window).height();
        var index = 0;
        var drawPercentChart = function () {
            $('.chart').easyPieChart({
                easing: 'easeOutBounce',
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        };

        $(document).scroll(function () {
            var top = $('.technical').height() - $(window).scrollTop();
            console.log(top);
            var windowWidth = $(window).width();
            if(windowWidth < 768 && top < 1000) {
                // small screen
                if (index == 0) {
                    drawPercentChart();
                }
                index++;
            }else if(windowWidth > 768 && top < 200) {
                //big screen
                if (index == 0) {
                    drawPercentChart();
                }
                index++;
            }

        })
    };
    var smoothScroll = function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 60
                    }, 1000);
                    return false;
                }
            }
        });
    };
    var loadChart = function () {
        // chart loading
        $(window).load(function () {
            var chart = window.chart = $('.chart').data('easyPieChart');
            $('.js_update').on('click', function () {
                chart.update(Math.random() * 100);
            });
        });
    };
    return {
        bannerSize: bannerSize,
        onResize: onResize,
        portfolioFilter: portfolioFilter,
        portfolioLightbox: portfolioLightbox,
        skillChart: skillChart,
        smoothScroll: smoothScroll,
        loadChart: loadChart
    }
})(jQuery);
