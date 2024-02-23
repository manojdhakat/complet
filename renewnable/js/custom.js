// function myFunction() {
//     var element = document.getElementById("dropdown");
//     element.classList.toggle("active");
// }



const notes = document.querySelectorAll('.touch')
for (var i = 0; i < notes.length; i++) {
    notes[i].addEventListener('mouseenter', function (e) {
        const ani = e.target.dataset.ani;
        e.target.classList.add('animated', 'infinite', ani);
        window.setTimeout(function () {
            e.target.classList.remove('animated', 'infinite', ani);
        }, 3000);
    });
}


$(window).scroll(function () {
    if ($(window).scrollTop()) {
        $(".up").addClass("up-text");
        $("#header").addClass("header_sticky");
    }
    else {
        ($(window).scrollTop())
        $(".up").removeClass("up-text");
        $("#header").removeClass("header_sticky");
    }
});
$(document).ready(function () {
    $(".toogle").click(function () {
        $(".insta>ul").toggleClass("hayper")

    });
    $(".insta #services").click(function () {
        $(".enquire>li .therm").toggleClass("loop");
        $(".drop-down").slideToggle(500);

    });

    $(".enquire .trust, .drop-down li .fw-semibold").click(function () {
        $(".enquire").removeClass("hayper");
    });

    $(".affec").slideUp();
    $(".fa-angle-right").click(function () {
        $(".affec").slideUp();
        $(".affec").removeClass("active");

        if ($(this).parents(".accordion-box").find(".affec").is(":visible")) {
            $(this).parents(".accordion-box").find(".affec").slideUp();
            $(this).parents(".accordion-box").removeClass("active");
        }
        else {
            $(this).parents(".accordion-box").find(".affec").slideDown();
            $(this).parents(".accordion-box").addClass("active");
        }
        $(".fa-angle-right").removeClass("md"),
            $(this).addClass("md");
    });

    $(".pik .manoj").slideUp();
    $(".arrow").click(function () {
        $(".pik .manoj").slideUp();
        $(".pik").removeClass("active");

        if ($(this).parents(".pik").find(".manoj").is(":visible")) {
            $(this).parents(".pik").find(".manoj").slideUp();
            $(this).parents(".pik").removeClass("active");
        }
        else {
            $(this).parents(".pik").find(".manoj").slideDown();
            $(this).parents(".pik").addClass("active");
        }
    });


    $('.slider-main').slick({
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        speed: 3000,
        arrows: false,
        autoplaySpeed: 0,
        pauseOnHover: false,
        cssEase: 'linear',



        responsive: [

            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    });

    $('.slidermain').slick({
        infinite: true,
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        prevArrow: $(".first"),
        nextArrow: $(".last"),
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    $('.soon').slick({
        infinite: false,
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                }
            },
        ]
    });
    $('.what_main').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: $(".bout_seriously"),
        nextArrow: $(".bout_serly"),
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    AOS.init();
});
