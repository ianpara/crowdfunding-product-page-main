// Set progress bar on page load
function setProgress() {
  var progressBar = document.getElementById("progressBar")
  var money = document.getElementById("currentMoney").innerHTML;
  money = parseInt(money.replace(/,/g,''));
  var percent = Math.ceil(money/100000 * 100);
  progressBar.style.width = percent + "%";
  progressBar.setAttribute("aria-valuenow", percent);
}
window.onload = setProgress;

// Set bookmark btn style
function bookmark2() {
  var form = document.getElementById("bookmarkToggle");
  var btn = document.getElementById("bookmarkBtn");

  if (btn.value=="Bookmark") {
    form.classList.add("marked")
    btn.value = "Bookmarked"
  } else {
    form.classList.remove("marked")
    btn.value = "Bookmark"
  }
}

// Set radio selection styles and show/hide donation container (jQuery cuz easier)
function pledgeCheck2(radio) {

    var inputValue = $(radio).attr("value");
    var targetBox = $("." + inputValue);

    $(".pledge").not(targetBox).hide();
    $(targetBox).css("display", "flex");

    $(radio).closest(".card").addClass("highlight");
    $(".pledge").not(targetBox).closest(".card").removeClass("highlight");

    $(targetBox).prev(".line").show();
    $(".pledge").not(targetBox).prev(".line").hide();

}

// $(document).ready(function() {
//   $('.navbar-toggler').click(function() {
//     console.log($("#navbartext").hasClass("show"));
//     if(!$("#navbartext").hasClass("show")) {
//       $('.main').append('<div class="modal-backdrop fade show"></div>');
//     }
//     else {
//       $('.main').remove('<div class="modal-backdrop fade show"></div>');
//     }
//   });
// });

// When a reward is picked, selced that radio button in the modal
var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-reward attributes
  var reward = button.getAttribute('data-bs-reward')

  if (!(reward)) {
    return;
  }

  document.getElementById(reward).checked = true;

  $(".pledge").not("." +reward).hide();
  $("." + reward).css("display", "flex");

  $("." + reward).closest(".card").addClass("highlight");
  $(".pledge").not("." + reward).closest(".card").removeClass("highlight");

  $("." + reward).prev(".line").show();
  $(".pledge").not("." + reward).prev(".line").hide();
  
})
