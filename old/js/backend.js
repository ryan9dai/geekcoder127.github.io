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

var data = [
];

// Firebase Initialization
var config = {
  apiKey: "AIzaSyD5vMJEi9o4ptfHOFXtD3uTHkO5sVl9gSk",
  authDomain: "full-stack-fun.firebaseapp.com",
  databaseURL: "https://full-stack-fun.firebaseio.com",
  projectId: "full-stack-fun",
  storageBucket: "full-stack-fun.appspot.com",
  messagingSenderId: "494686063672"
};
firebase.initializeApp(config);
var dbRef = firebase.database().ref();
dbRef.on('value', function(snapshot) {
  data = (snapshot.val()) || [];
  console.log(data);
  addPosts();
  if(currentPage == 2){
    gotoPost(getQueryVariable("post"));
  }
});
var postHTML = [
  '<div class="post-preview"><a href="?post=',
  true,
  '"><h2 class="post-title">',
  true,
  '</h2><h3 class="post-subtitle">',
  true,
  '</h3></a><p class="post-meta">Posted by <a href="?p=1">',
  true,
  '</a> on ',
  true,
  '</p></div><hr><div class="clearfix text-center"><a class="btn btn-primary js-add-posts">Load More Posts</a></div>'
];
function addPosts(){
  var tempPostPreviewShownAmount = postPreviewShownAmount;
  for(var i = tempPostPreviewShownAmount;i<tempPostPreviewShownAmount+3;i++){
    if(data[i]){
      postPreviewShownAmount += 1;
      let tempPreviewHTML = "";
      let tempData = [i,data[i].title,data[i].subtitle,"Fred Adams",data[i].time];
      let itemVarDataIndex = 0;
      postHTML.forEach(function(item,index){
        if(item==true){
          tempPreviewHTML+=tempData[itemVarDataIndex];
          itemVarDataIndex+=1;
        }else{
          tempPreviewHTML+=item;
        }
      });
      $(".js-add-posts").parent().remove();
      $(".post-previews").append(tempPreviewHTML);
      $(".js-add-posts").on("click",function(){
        addPosts();
      });
    }else{
      $(".js-add-posts").parent().remove();
    }
  }
}
function gotoPost(postNum){
  $("html, body").scrollTop(0);
  var pageIndex = 2;
  currentPage = pageIndex;
  if(data[postNum].bg){
    $(".masthead").css("background-image","url(img/" + postNum + "-post-bg.jpg)");
  }else{
    $(".masthead").css("background-image","url(img/post-bg.jpg)");
  }
  $(".masthead .site-heading").addClass("post-heading");
  $(".masthead .site-heading").html('<h1></h1><span class="subheading"></span>');
  $(".masthead .site-heading h1").text(data[postNum].title);
  $(".masthead .site-heading .subheading").text(data[postNum].subtitle);
  $(".masthead .site-heading").append("<span class='meta'>Posted by <a target='_blank' href='?1'>Fred Adams</a> on " + generateDate(data[postNum].time) + "</span>");
  $(".container.main.active").removeClass("active");
  $(".container.main:eq(" + pageIndex + ")").addClass("active");
  $(".container.main:eq(" + pageIndex + ")").html(data[postNum].post);
}