$(document).ready(function () {
  let hiddenRow = $(".expandable");
  $(".expand-btn").click(function () {
    hiddenRow.toggleClass("hidden");
    if (hiddenRow.is(":visible")) {
      $(".expand-btn").html("свернуть");
    } else {
      $(".expand-btn").html("вернуть");
    }
  });
});

$(".play-button").click(function () {
  $(".modal-canvas").toggleClass("hidden");
});

$(".modal-close").click(function () {
  $(".modal-canvas").toggleClass("hidden");
});

$(document).ready(function () {
  $(".input-button").on("click", function () {
    $(".conection-container").toggleClass("conection-container-sended");
    $(".input-container").toggleClass("hidden");
    $(this).toggleClass("sended");
    $("input[type=text]").each(function () {
      $(this).val("");
    });
  });
});
