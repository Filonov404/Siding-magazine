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
     responsive: [
         {
             breakpoint: 650,
             settings: {
                 slidesToShow: 2,
             }
         },
         {
             breakpoint: 420,
             settings: {
                 slidesToShow: 2,
                 arrows: false,
                 dots: true,
             }
         }
     ]
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
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                }

            }
        ]
    })

// Слайдер с отзывами
$(".review-slider").slick({

})

    //добавляем классы при наведении на работы

    $('.jobs-item')
        .on('mouseenter', function() {
            $(this).find('.jobs-content').hide();
        })
        .on('mouseleave', function() {
            $(this).find('.jobs-content').show();
        });

});


