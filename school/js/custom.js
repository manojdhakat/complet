
var aText = new Array(

"<span>Embrace the Orion Experience</span> Where every lesson is a journey every challenge a stepping stone and every student a beacon of boundless potential Lets co-create a future",
 "filled with insight innovation and integrity Where your childs dream takes flight"
);
var iSpeed = 100;
var iIndex = 0;
var iArrLength = aText[0].length; 
var iScrollAt = 20;
 
var iTextPos = 0;
var sContents = '';
var iRow; 
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}
typewriter();

















var marker = document.querySelector('.leadership');
var item = document.querySelectorAll('.stem ul li');


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
    if ($(window).scrollTop() >= 1) {
        $('.mobile-logo').addClass('logo');
        $('.mobile-logo-1').addClass('logo1');
        $('.header-buttom').addClass('fixed-header');
        $('.learning>li>a').addClass('menu');
        $('.header-top .first p').addClass("ld");
        $('.toggle').addClass("mobile");



    }
    else {
        $('.mobile-logo').removeClass('logo');
        $('.mobile-logo-1').removeClass('logo1');
        $('.header-buttom').removeClass('fixed-header');
        $('.learning>li>a').removeClass('menu');
        $('.header-top .first p').removeClass('ld');
        $('.toggle').removeClass("mobile");


    }
});


$(document).ready(function () {

    $(function(){
        $('.learning li').click(function(){
            $('li.active').removeClass('active');
            $(this).addClass('active');
        });
    });
    
    $(".refress-text button").click(function () {
        $("#refress").css({
            "display": "none"
        })
    })
    
    $(".learning>li>a").click(function () {
        // $(".glad").slideToggle()
    });

    $(".toggle").click(function () {
        $(".toggle").toggleClass("show"),
        $(".learning").toggleClass("show")
    });


    $(".search button").click(function () {
        $(".staff").slideDown(1000)
    })
    $(".popups button .fa-times").click(function () {
        $(".staff").slideUp(1000);

    });

    $('.stem ul li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.stem ul li').removeClass('current');
        $('.neur').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');

        // $('.leadership').addClass('current');
    })


    $('.creat-text ul li').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('.creat-text ul li').removeClass('current');
        $('.img').removeClass('current');


        $(this).addClass('current');
        $("#" + tab_id).addClass('current');

        $(".creat-text ul li").children(".future").removeClass("the"),
            $(this).children(".future").addClass("the");

        $(".creat-text ul li").children("span").removeClass("loop"),
            $(this).children("span").addClass("loop");

        $(".desires.current").fadeToggle(2000)
    })

    $('.slider').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        dots: true
    });
    $('.lifetime ul li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.lifetime ul li').removeClass('current');
        $('.desires').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })


    $('.lojer').slick({
        arrows: true,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        infinite: true, 
        prevArrow: $(".prew"),
        nextArrow: $(".next"),
      
    });
    $('.happening-slider').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: 'linear',
        centerMode: true,
        centerPadding: "40px",
        dots: false
    });
    AOS.init();
});
