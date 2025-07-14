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
  // product
    $(function () {
        $(".basket_h").click(function () {
        alert("필수 옵션을 선택해주세요.");
        });
    });
    $(function () { 
        $(".heart_h").click(function () {
        alert("로그인 후 사용해주세요.");
        location.href = "./sub6.html";
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