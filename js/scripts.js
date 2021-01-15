$(document).ready(function () {
  $("#formCode").submit(function (event) {
    event.preventDefault();
    $("#Csharp").hide();
    $("#python").hide();
    $("#swift").hide();
    $("#javascript").hide();
    const animal = parseInt($("#animal").val());
    const snakes = $("input:radio[name=snakes]:checked").val();
    const music = $("input:radio[name=music]:checked").val();
    const fast = $("input:radio[name=fast]:checked").val();
    const favoriteColor = $("#color").val();

    if (animal === 2 && snakes === "no") {
      $("#python").show();
    } else if (animal === 1 && music === "yes") {
      $("#Csharp").show();
    } else if (animal === 3 && fast === "yes") {
      $("#swift").show();
    } else {
      $("#javascript").show();
    }
    $(body).css(background-color, favoriteColor);
  });
});