// USEFUL FUNCTIONS
function getQueryVariable(variable){
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){
      return pair[1];
    }
  }
  return(false);
}
function generateDate(date){
  var dateData = date.split("/");
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var newDate = "";
  newDate += months[dateData[0]-1] + " ";
  newDate += dateData[1] + ", ";
  newDate += dateData[2];
  return newDate;
}
$(".search input").on("input",function(){
  $(".post-list .post-link.active-link").removeClass("active-link");
  $(".post-list").removeClass("searched");
  if($(this).val() != ""){
    var dataTitleList = [];
    var searchInput = $(this).val();
    newData.forEach(function(item,index){
      dataTitleList.push(item.title + item.subtitle);
    });
    if(dataTitleList.length>0){
      $(".post-list").addClass("searched");
    }
    dataTitleList.forEach(function(item,index){
      if(item.toLowerCase().indexOf(searchInput)!=-1){
        $(".post-list .post-link:eq(" + index + ")").addClass("active-link");
      }
    });
  }else{
    $(".post-list .post-link.active-link").removeClass("active-link");
    $(".post-list").removeClass("searched");
  }
});