
var marker = document.querySelector('.leadership');
var item = document.querySelectorAll('.menu ul li');


function indicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
}

item.forEach(link => {
    link.addEventListener("click", (e) => {
        indicator(e.target);
    })
})



$(window).scroll(function () {
    if ($(window).scrollTop()) {
        $(".header").addClass("header_sticky");
        $(".menu a").addClass("change");
    }
    else {
        ($(window).scrollTop())
        $(".header").removeClass("header_sticky");
        $(".menu a").removeClass("change");
    }
});

$(document).ready(function () {
    $(".toggle_bar").click(function () {
        $(".menu ul").toggleClass("loop")
    })
    $('.pixal').slick({
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplaySpeed: 7000,
        dots: true,
    });

    $('.slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        infinite: true,
        cssEase: 'linear',
        pauseOnHover:false,
        speed: 2000,
        responsive: [

            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]

    });

    $('.joopy').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        infinite: true,
        cssEase: 'linear',
        speed: 2000,
        pauseOnHover:false,
        responsive: [

            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });
    AOS.init();
});