$(document).ready(function () {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Email
  console.log("ready!");
  $(".check").click(function () {
    const email = document.querySelector(`#email`).value;
    debugger;
    if (regex.test(email)) {
      $(".hidden").show();
      $(`.test`).hide();
    }
  });

  //View More
  $(`.viewless`).hide();
  $(".viewmore").click(function (event) {
    const btnViewMore = event.currentTarget;
    const content = btnViewMore.previousElementSibling;
    const btnViewLess = btnViewMore.nextElementSibling;

    $(btnViewMore).hide();
    $(content).show();
    $(btnViewLess).show();
  });

  $(".viewless").click(function (event) {
    const btnViewLess = event.currentTarget;
    const btnViewMore = btnViewLess.previousElementSibling;
    const content = btnViewMore.previousElementSibling;

    $(btnViewLess).hide();
    $(content).hide();
    $(btnViewMore).show();
  });
});
