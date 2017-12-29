function generateDate(date){
  var dateData = date.split("/");
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var newDate = "";
  newDate += months[dateData[0]-1] + " ";
  newDate += dateData[1] + ", ";
  newDate += dateData[2];
  return newDate;
}

var pagesData = [
  ["Fred A's Blog","Where I talk about tech and programming."],
  ["About Me","This is what I do."]
];
var postPreviewShownAmount = 0;
var currentPage = getQueryVariable("p");
if(!currentPage){
  currentPage = 0;
}
if(getQueryVariable("post")){
  currentPage = 2;
}
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
  if(currentPage != 2){
    switchNav($("#mainNav .nav-link:eq(" + currentPage + ")"),true);
  }
})(jQuery); // End of use strict

$("#mainNav .nav-link").on("click",function(){
  var pageIndex = $("#mainNav .nav-link").index($(this));
  window.open("?p=" + pageIndex,"_self");
});
function switchNav(item,first){
  if(!first){
    $("html, body").scrollTop(0);
  }
  var pageIndex = $("#mainNav .nav-link").index($(item));
  currentPage = pageIndex;
  $(".masthead").css("background-image","url(img/" + pageIndex + "-bg.jpg)");
  $(".masthead .site-heading").removeClass("post-heading");
  $(".masthead .site-heading").html('<h1></h1><span class="subheading"></span>');
  $(".masthead .site-heading h1").text(pagesData[pageIndex][0]);
  $(".masthead .site-heading .subheading").text(pagesData[pageIndex][1]);
  $(".container.main.active").removeClass("active");
  $(".container.main:eq(" + pageIndex + ")").addClass("active");
  if($(".navbar-toggler").hasClass("collapsed")==false && first==false){
    $('.navbar-toggler').trigger('click');
  }
}