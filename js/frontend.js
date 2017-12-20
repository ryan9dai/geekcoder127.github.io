var pagesData = [
  ["Full-Stack Fun","A Blog for Any and All Web-Dev Lovers!"],
  ["About Me","This is what I do."]
];
var currentPage = 0;
(function($) {
  "use strict"; // Start of use strict

  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

  //primary navigation slide-in effect
  $(window).on('scroll', {
    previousTop: 0
  },
  function() {
    if($(window).width() > 992){
      var currentTop = $(window).scrollTop();
      if(currentTop > 0){
        $("#mainNav").addClass("is-fixed is-visible");
      }else{
        $("#mainNav").removeClass("is-fixed is-visible");
      }
    }
  });
  switchNav($("#mainNav .nav-link:eq(0)"),true);
})(jQuery); // End of use strict

$("#mainNav .nav-link").on("click",function(){
  switchNav($(this),false);
});
function switchNav(item,first){
  if(!first){
    $("html, body").scrollTop(0);
  }
  var pageIndex = $("#mainNav .nav-link").index($(item));
  currentPage = pageIndex;
  $(".masthead").css("background-image","url(img/" + pageIndex + "-bg.jpg)");
  $(".masthead .site-heading h1").text(pagesData[pageIndex][0]);
  $(".masthead .site-heading .subheading").text(pagesData[pageIndex][1]);
  $(".container.main.active").removeClass("active");
  $(".container.main:eq(" + pageIndex + ")").addClass("active");
  if($(".navbar-toggler").hasClass("collapsed")==false && first==false){
    $('.navbar-toggler').trigger('click');
  }
}