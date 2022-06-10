$(function () {
  //СЧЕТЧИК АКЦИИ
  $("#countdown").timeTo({
    timeTo: new Date(
      new Date("Thu Jun 16 2022 09:00:00 GMT+0300 (Москва, стандартное время)")
    ),
    displayDays: 2,
    displayCaptions: true,
    fontSize: 48,
    captionSize: 14,
    lang: "ru",
  });

});


