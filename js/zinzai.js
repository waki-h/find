$(function() {

  $("#drawerToggle").click(function(){
    $(this).toggleClass("open");
    $("#globalNav").slideToggle();
  });

  $(window).on("resize", function() {
    var w = $(window).width();
    if(w > 768) {
      $("#drawerToggle").removeClass("open");
      $("#globalNav").hide();
    }
  });

});
