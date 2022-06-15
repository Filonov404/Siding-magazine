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
    // добавляем класс сослайдером на адаптиве

    function myFunction(x) {
        if (x.matches) {
            $('.products-siries-inner').addClass("slider");
        } else {
            $('.products-siries-inner').removeClass("slider");
        }
    }

    const mmObj = window.matchMedia("(max-width: 650px)");
    myFunction(mmObj);
    mmObj.addListener(myFunction);

    $('.products-siries-inner.slider').slick({
        slidesToShow: 2,
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: '20px',
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })


$(".review-slider").slick({

})

});


