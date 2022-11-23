$(document).ready(function ($) {
  // Клик по ссылке "Закрыть".
  $(".popup__close").click(function () {
    $(this).parents(".popup").fadeOut();
    return false;
  });

  // Клик по фону, но не по окну.
  $(".popup").click(function (e) {
    if ($(e.target).closest(".popup__main").length == 0) {
      $(this).fadeOut();
    }
  });

  // Исчезновение блока в первом ряду
  $("#btn1").click(function () {
    $("#block1").toggleClass("d-none");
  });

  // Изменение положения двух блоков во втором ряду
  $("#btn2").click(function () {
    $("#block2_2").toggleClass("order_1");
  });
});
