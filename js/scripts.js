$(document).ready(function() {
  $(document).submit(function(event){
    event.preventDefault();
    $(".Csharp").hide();
    $(".python").hide();
    $(".swift").hide();
    $(".javascript").hide();
    const animal = $("#animal").val();
    const snakes = $("input:radio[name=snakes]:checked").val();
    const music = $("input:radio[name=music]:checked").val();
    const fast = $("input:radio{name=music]:checked").val();
    const favoriteColor = $("#color").val();

    if (animal === "Snake" && snakes === "no") {
      $(".python").show();
    } else if (animal === "Songbird" && music === "yes") {
      $(".Csharp").show();
    } else if (animal === "Hedgehog" && fast === "yes") {
      $(".swift").show();
    } else {
      $(".javascript").show();
    }
  });
});