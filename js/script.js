// top
$(function () {
  setInterval(function () {
    $("#top ul").delay(3000);
    $("#top ul").animate({
      marginTop: '-30px'
    });
    $("#top ul").delay(3000);
    $("#top ul").animate({
      marginTop: '-60px'
    });
    $("#top ul").animate({
      marginTop: '0px'
    }, 0);

  });
});
// header
// header
$( document ).ready( function() {
  var jbOffset = $( '#nav' ).offset();
  /*선택자는 본인 구조에 맞게 수정*/
  $( window ).scroll( function() {
    if ( $( document ).scrollTop() > 30) {//여기 지정된 길이 이후부터 적용됩니다
      $( '#nav' ).addClass("on");
      /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
    }
    else {
      $( '#nav' ).removeClass("on");
      /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
    }
  });
});
// hambutager,overlay
$('.hambutager_button').click(function(ev){
  ev.preventDefault();
  $(this).toggleClass('active');
  $('.overlay').toggleClass('visible');
  $('.header').toggleClass('overlay_h');
});
// header_emo
$(function () {
  $(".basket").click(function () {
    alert("로그인 후 사용해주세요.");
  });
});
$(function () {
  
  $(".home").click(function () {
    alert("로그인 후 사용해주세요.");
  });
});

//   swiper1
var swiper1 = new Swiper(".swiper1", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
// swiper2
var swiper2 = new Swiper(".swiper2", {
  // centeredSlides: true,
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },
});
// product
$(function () {
  $(".basket_h2").click(function () {
    alert("옵션을 선택하고 사용해주세요.");
  });
});
$(function () {
  
  $(".heart_h2").click(function () {
    alert("로그인 후 사용해주세요.");
  });
});
// 고정버튼
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 1000) {//아이콘이 나타나길 원하는 높이를 설정하세요
      $('.top_up').fadeIn();//나타날 아이콘 클래스 수정!
  } else {
      $('.top_up').fadeOut();//나타날 아이콘 클래스 수정!
  }
});
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 2000) {//아이콘이 나타나길 원하는 높이를 설정하세요
      $('.top_down').fadeIn();//나타날 아이콘 클래스 수정!
  } else {
      $('.top_down').fadeOut();//나타날 아이콘 클래스 수정!
  }
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
  $('html, body').animate({
  scrollTop: target.offset().top
  }, 500);//움직이는 시간 조정
  return false;
  }
  }
  });
  });