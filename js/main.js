$(function () {
  //СЧЕТЧИК АКЦИИ
    loopcounter('counter-inner');


    //Модальное окно на главной

    $(".add-sale").on("click", function () {
        $(".modal-wrapper").css("display", "block");
    });

    $(".close-btn").on("click", function () {
        $(".modal-wrapper").css("display", "none");
    });

    //slick-slider слайдер с популярными товарами

 $(".popular-inner").slick({
    slidesToShow: 3,
     centerPadding: '60px',
 });

});


