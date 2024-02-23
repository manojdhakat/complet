$(window).scroll(function () {
    if ($(window).scrollTop()) {
        $("#header").addClass("header_sticky");
        $(".menu a").addClass("change");
    }
    else {
        $("#header").removeClass("header_sticky");
        $(".menu a").removeClass("change");
    }
});
$(document).ready(function () {
    $(".get .toggle-bar1").click(function () {
        $(".sidebar").addClass("crose")
    });
    $(".sidebar>.logo>button").click(function () {
        $(".sidebar").removeClass("crose")
    });

    $(".toggle-bar1").click(function () {
        $(this).toggleClass("show"),
            $("#header-buttom .menu").toggleClass("show-menu"),
            $(".logo").toggleClass("hayer");
    });


    $(".toggle-bar").click(function () {
        $(".get .fa-bars").removeClass("show"),
            $("#header-buttom .menu").removeClass("show-menu"),
            $(".logo").removeClass("hayer");
    });

    $(".dropdown>ul>li").click(function () {
        $(".menu ul li").removeClass("show-submenu")
        $(this).addClass("show-submenu")
    })


    $('.menu>ul>li>a').click(function () {
        $(this).next('.dropdown').slideToggle();
    });

});

// $(document).ready(function () {
//     $('.menu>ul>li>a').click(function () {
//         $(this).next('.dropdown').slideToggle();
//     });
// });


