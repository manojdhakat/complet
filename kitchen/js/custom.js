function inVisible(element) {
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
        animate(element);
}

function animate(element) {
    if (!element.hasClass('ms-animated')) {
        var maxval = element.data('max');
        var html = element.html();
        element.addClass("ms-animated");
        $({
            countNum: element.html()
        }).animate({
            countNum: maxval
        }, {
            duration: 3000,
            easing: 'linear',
            step: function () {
                element.html(Math.floor(this.countNum) + html);
            },
            complete: function () {
                element.html(this.countNum + html);
            }
        });
    }

}
let vid = document.getElementById("myVideo");
function playVid() {
    vid.play();
}

$(document).ready(function () {
    $('.gallery-slider').slick({
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        adaptiveHeight: true,
        prevArrow: $(".prev"),
        nextArrow: $(".next"),
        responsive: [

            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: 20,
                }
            }

        ]
    });
    $('.banner-slider').slick({
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });


    $(".menu-bar").click(function () {
        $(".nav-main").toggleClass("open")
    })

    $(".menu-bar").click(function () {
        $(".overley").addClass("over")
    })
});




$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll) {
        $(".pink-section").addClass("sticky");
    } else {
        $(".pink-section").removeClass("sticky");
    }

    $("span[data-max]").each(function () {
        inVisible($(this));
    });
});
AOS.init();
