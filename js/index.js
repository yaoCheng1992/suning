$(function () {

    var timer = null;
    var index = 1;
    var width = $('.snBanner').width();
    var $points = $('.snBanner ul:last').find('li');

    var bannerAnimation = function () {
        $('.snBanner ul:first').animate({
            transform: 'translateX(' + (-width * index) + 'px)'
        }, 'linear', function () {

            if (index > 8) {
                index = 1;
                $('.snBanner ul:first').css('transform', 'translateX(' + (-width * index) + 'px)')

            }
            else if (index < 1) {
                index = 8;
                $('.snBanner ul:first').css('transform', 'translateX(' + (-width * index) + 'px)')
            }
            pointChange();

        })
    }

    var pointChange = function () {
        $points.removeClass('active').eq(index-1).addClass("active")
    }

    timer = setInterval(function () {
        index++;
        bannerAnimation();
    }, 1000)

    $('.snBanner').on('swipeLeft',function(){
        index++;
        bannerAnimation();

    })

    $('.snBanner').on('swipeRight',function(){
        /*index--;
        bannerAnimation();*/
    })

})




