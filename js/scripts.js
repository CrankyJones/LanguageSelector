$(document).ready(function () {
  $("#formCode").submit(function (event) {
    event.preventDefault();
    $("#Csharp").hide();
    $("#python").hide();
    $("#swift").hide();
    $("#javascript").hide();

    const userName = $("input#recipient").val();
    $(".userName").text(userName);

    const animal = parseInt($("#animal").val());
    const snakes = $("input:radio[name=snakes]:checked").val();
    const music = $("input:radio[name=music]:checked").val();
    const fast = $("input:radio[name=fast]:checked").val();
    const favoriteColor = $("#color").val();

    if (userName === "") {
      alert("Please enter your name.")
    } else if (animal === 0) {
      alert("Please choose an animal.")
    } else if (animal === 2 && snakes === "no") {
      $("#python").show();
    } else if (animal === 1 && music === "yes") {
      $("#Csharp").show();
    } else if (animal === 3 && fast === "yes") {
      $("#swift").show();
    } else {
      $("#javascript").show();
    }

    if (animal != 0 && userName != "") {
      let modal = document.getElementById("resultsModal");
      let closeX = document.getElementsByClassName("close")[0];

      modal.style.display = "block";

      closeX.onclick = function () {
        modal.style.display = "none";
      }
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
      $("body").css("background-color", favoriteColor);
      formCode.reset();
    }
  });
});