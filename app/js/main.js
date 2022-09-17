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
      });    
      $('.sleep_slaider').slick({
        infinite: true,
        fade: true,
        prevArrow:'<img class="slider_arrow slider_arrow_left" src="./img/header/arrow_left.svg" alt="#">',
        nextArrow:'<img class="slider_arrow slider_arrow_right" src="./img/header/arrow_right.svg" alt="#">',
      });  



      $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="./img/sleep/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="./img/sleep/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
      $('.quantity').each(function() {
        var spinner = $(this),
          input = spinner.find('input[type="number"]'),
          btnUp = spinner.find('.quantity-up'),
          btnDown = spinner.find('.quantity-down'),
          min = input.attr('min'),
          max = input.attr('max');
  
        btnUp.click(function() {
          var oldValue = parseFloat(input.val());
          if (oldValue >= max) {
            var newVal = oldValue;
          } else {
            var newVal = oldValue + 1;
          }
          spinner.find("input").val(newVal);
          spinner.find("input").trigger("change");
        });
  
        btnDown.click(function() {
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

      $('.quantity-button').on('click', function() {
        let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) *  $('.summ').data('guests');
        $('.summ').html('$ '  + summ +' USD');
      });


      let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) *  $('.summ').data('guests');
      $('.summ').html('$ '  + summ +' USD');



      $('.shop_circle_box').on('click', function(){
        $(this).toggleClass('active')
      });


      $('.shop_slider').slick({
        infinite: true,
        fade: true,
        prevArrow:'<img class="slider_arrow slider_arrow_left" src="./img/header/arrow_left.svg" alt="#">',
        nextArrow:'<img class="slider_arrow slider_arrow_right" src="./img/header/arrow_right.svg" alt="#">',
      });  

});

