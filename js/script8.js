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
$( document ).ready( function() {
    var jbOffset = $( '#nav' ).offset();
    /*선택자는 본인 구조에 맞게 수정*/
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > 30) {//여기 지정된 길이 이후부터 적용됩니다
        $( '#nav' ).addClass("scrollup");
        /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
      }
      else {
        $( '#nav' ).removeClass("scrollup");
        /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
      }
    });
  });
 // hambutager,overlay
  $('.rotate').click(function(ev){
    ev.preventDefault();
    $(this).toggleClass('active');
    $('.nav_area').toggleClass('on');
    $('#nav').toggleClass('change');
  });

  window.addEventListener('resize', function(){
    console.log('resize event!');
    if (window.innerWidth <1000) {
        $('.nav_area').removeClass('on');
        $('#nav').removeClass('change');
        $('.rotate').removeClass('active');
    }
  });

  $(function(){
    $(".open").click(function(){
      $(".nav_area_mo").addClass('visible');
    });
  });
  $(function(){
    $(".btn_close_mo").click(function(){
      $(".nav_area_mo").removeClass('visible');
    });
  });

// 아코디언
$(function(){
    $(".sub_mo> ul> li").click(function(){
      $(this).children(".sub_box").slideToggle();
      $(this).siblings().children(".sub_box").slideUp();
    });
  });
  $(function(){
    $(".sub_mo> ul> li").click(function(){
      $(this).toggleClass("turn");
      if($(this).hasClass("turn")===true){
          $(this).siblings().removeClass("turn");
      }
    });
  });

// header_emo
  $(function () {
    $(".basket").click(function () {
      alert("로그인 후 사용해주세요.");
      location.href = "./sub1.html"; 
    });
  });

  // 푸터 아코디언
  $(function(){
  $(".footer_sub> ul> li").click(function(){
    $(this).children(".fs_sub_box").slideToggle();
    $(this).siblings().children(".fs_sub_box").slideUp();
  });
  });
  $(function(){
    $(".footer_sub> ul> li").click(function(){
      $(this).toggleClass("turn");
      if($(this).hasClass("turn")===true){
          $(this).siblings().removeClass("turn");
      }
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

// 상품 갤러리
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  ResizeObserver:true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".mySwiper3", {
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  }
});

// right
$(function(){
  $(".tap_wrap>li").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
  });

  $(".cont2").hide();
  $(".cont3").hide();
  $(".tap_wrap>li:nth-child(1)").click(function(){
    $(".cont1").show();
    $(".cont2").hide();
    $(".cont3").hide();
  });
  $(".tap_wrap>li:nth-child(3)").click(function(){
    $(".cont2").show();
    $(".cont1").hide();
    $(".cont3").hide();
  });
  $(".tap_wrap>li:nth-child(5)").click(function(){
    $(".cont3").show();
    $(".cont1").hide();
    $(".cont2").hide();
  });
});

// price
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="up.jpg"></div><div class="quantity-button quantity-down"><img src="down.jpg"></div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function () {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function () {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function () {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});
//인풋값 받아와서 총가격 계산하기
$(function () {
  //총 가격 처음상태 입력하기
  var price = $(".price span").text();
  $(".total_price span").text(price);


  //숫자 조절시에 계산하기
  price = price.replace(/[^\d]+/g, "");
  $(".quantity-button").click(function () {
    //인풋 숫자값 가져오기
    var CountNumber = $(".numb_box input").val();
    //인풋 숫자값으로 계산
    var totalNumb = price * CountNumber;
    totalNumb = totalNumb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    $(".total_price span").text(totalNumb);//콤마 붙여서 총가격에 입력
  });

});

// select 클릭시 price 값 보이기
$(function(){
  $("#price_wrap").hide();
  $("select").on("change",function(){
    $("#price_wrap").show();
  });
  $(".close").click(function(){
    $("#price_wrap").hide();
  });
});
// scroll 메뉴
$('.menu li a').on('click', function(event) {
  $(this).parent().siblings().children().removeClass('active');
  $(this).addClass('active');
});

$(window).on('scroll', function() {
  $('.section').each(function() {
      if($(window).scrollTop() >= $(this).offset().top) {
          var id = $(this).attr('id');
          $('.menu li a').removeClass('active');
          $('.menu li a[href=#'+ id +']').addClass('active');
      }
  });
});


// scroll (메뉴 화면넓이, 스크롤이동시 변화)
    const tabProduct = document.getElementById("tabProduct");

    function checkConditions() {
      const scrollY = window.scrollY;
      const width = window.innerWidth;

      if (width >= 1020 && scrollY >= 900) {
        tabProduct.classList.add("fix");
      } else if (width < 1020 && scrollY >= 1800) {
        tabProduct.classList.add("fix");
      } else {
        tabProduct.classList.remove("fix");
      }
    }

    window.addEventListener("load", checkConditions);
    window.addEventListener("resize", checkConditions);
    window.addEventListener("scroll", checkConditions);

// 아코디언
$(function(){
  $("#section2> ul> li").click(function(){
    $(this).children(".text_info").slideToggle();
    $(this).siblings().children(".text_info").slideUp();
  });
});
$(function(){
  $("#section2> ul> li").click(function(){
    $(this).toggleClass("turn");
    
    if($(this).hasClass("turn")===true){
        $(this).siblings().removeClass("turn");  
    }
  });
});

// 리뷰 select
$(function(){
   $(".filter_dropdown").hide();
  $(".symbol1").click(function(){
    $(".filter_dropdown1").toggle();
  });
  $(".symbol2").click(function(){
    $(".filter_dropdown2").toggle();
  });
  $(".symbol3").click(function(){
    $(".filter_dropdown3").toggle();
  });
});
$(function(){
  $(".reset1").click(function(){
    $("filter_dropdownp1").hide();
  });
  $(".reset2").click(function(){
    $("filter_dropdownp2").hide();
  });
  $(".reset3").click(function(){
    $("filter_dropdownp3").hide();
  });
});
