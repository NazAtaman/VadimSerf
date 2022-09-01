$(function(){
    $('.header_slider').slick({
        infinite: true,
        fade: true,
        prevArrow:'<img class="slider_arrow slider_arrow_left" src="./img/header/arrow_left.svg" alt="#">',
        nextArrow:'<img class="slider_arrow slider_arrow_right" src="./img/header/arrow_right.svg" alt="#">',
        asNavFor: '.slider_dots',
      });       

      $('.slider_dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header_slider',
      });
      $('.serf_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:'<img class="slider_arrow slider_arrow_left" src="./img/header/arrow_left.svg" alt="#">',
        nextArrow:'<img class="slider_arrow slider_arrow_right" src="./img/header/arrow_right.svg" alt="#">',
        asNavFor: '.slider_map',
      });
      $('.slider_map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.serf_slider',
        focusOnSelect: true
      });
      $('.travel_sliderr').slick({
        infinite: true,
        fade: true,
        prevArrow:'<img class="slider_arrow slider_arrow_left" src="./img/header/arrow_left.svg" alt="#">',
        nextArrow:'<img class="slider_arrow slider_arrow_right" src="./img/header/arrow_right.svg" alt="#">',
        asNavFor: '.slider_dots',
      });    

});

