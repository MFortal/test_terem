$(document).ready(function ($) {
  $("#form").submit(function (e) {
    // отображение данных из формы на экран
    const $data = new FormData(e.target);
    const $formJSON = Object.fromEntries($data.entries());
    $(".results").html(JSON.stringify($formJSON, null, 2));

    // отправка данных на сервер
    $.ajax({
      url: "/form/query.php",
      method: "get",
      dataType: "html",
      data: $formJSON,
      success: function () {
        alert("Данные получены");
      },
    });
  });
});
