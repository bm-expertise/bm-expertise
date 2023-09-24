jQuery(document).ready(function () {
  $(".phone").mask("+7 (999) 999-99-99");

  jQuery(".send-form").click(function () {
    var form = jQuery(this).closest("form");

    if (form.valid()) {
      form.css("opacity", ".5");
      var actUrl = form.attr("action");

      jQuery.ajax({
        url: actUrl,
        type: "post",
        dataType: "html",
        data: form.serialize(),
        success: function (data) {
          form.html(data);
          form.css("opacity", "1");
          form.find(".status").html("форма отправлена успешно");
          $("#myModal").modal("show");
        },
        error: function () {
          form.find(".status").html("серверная ошибка");
        },
      });
    }
  });
});
$(".btn").click(function (e) {
  e.preventDefault();
  $(".popup-wrapper").fadeIn(800);
});

$(".close-popup").click(function () {
  $(".popup-wrapper").fadeOut(800);
});
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open");
  });
});
