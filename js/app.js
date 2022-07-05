$(document).ready(() => {
  // Start nav Section
  // for bugger
  $(".navbuttons").click(function () {
    $(".navbuttons").toggleClass("crossxs");
  });

  // for nav
  $(window).scroll(function () {
    let getscrolltop = $(this).scrollTop();
    // console.log(getscrolltop);

    if (getscrolltop >= 200) {
      $(".navbar").addClass("navmenus");
    } else {
      $(".navbar").removeClass("navmenus");
    }
  });
  // End nav Section

  // Start Propeties Section

  $(".propertylists").click(function () {
    // for active item

    // $(this).addClass("activeitems").siblings().removeClass("activeitems");
    // OR
    $(this).addClass("activeitems");
    $(this).siblings().removeClass("activeitems");

    // for filter
    let getattvalue = $(this).attr("data-filter");
    // console.log(getattvalue);

    if (getattvalue === "all") {
      $(".filters").show("slide", 1000);
    } else {
      $(".filters").hide();
      $(".filters")
        .not("." + getattvalue)
        .hide("slide", 1000);
      $(".filters")
        .filter("." + getattvalue)
        .show("slide", 1000);
    }
  });

  lightbox.option({
    showImageNumberLabel: false,
  });
  // End Propeties Section

  // Start Adv Section
  $(window).scroll(function () {
    let getscrolltop = $(this).scrollTop();

    if (getscrolltop >= 900) {
      $("#advimg").addClass("fromlefts");
      $("#advtext").addClass("fromrights");
    } else {
      $("#advimg").removeClass("fromlefts");
      $("#advtext").removeClass("fromrights");
    }
  });
  // End Adv Section
});
