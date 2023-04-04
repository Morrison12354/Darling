$(".open").click(function () {
  $(".kefte").toggleClass("flex");
  $(".enter-inner").toggleClass("hidden");
});

$(".mesenge").click(function () {
  $(".kefte").remove(".flex");
  $(".enter-inner").toggleClass("hidden");
});

let name;
let nam;
name = "пароль: 6547432";
nam = "тип он на почту оптравился";
$(".password").click(function () {
  alert(name);
  alert(nam);
});
