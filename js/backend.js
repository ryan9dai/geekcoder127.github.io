var data;

try {
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
  var dbRef = firebase.database().ref('posts');
  dbRef.on('value', function(snapshot) {
    data = (snapshot.val());
  });
}catch(err){
  data = [
    {title:"My First Blog Post!",subtitle:"dabaholic",time:"11 Dec 2011"}
  ];
}
var postHTML = [
  '<div class="post-preview"><a href="javascript:gotoPost(',
  true,
  ');"><h2 class="post-title">',
  true,
  '</h2><h3 class="post-subtitle">',
  true,
  '</h3></a><p class="post-meta">Posted by <a target="_blank" href="?1">',
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
  $(".masthead").css("background-image","url(img/" + postNum + "-post-bg.jpg)");
  $(".masthead .site-heading").addClass("post-heading");
  $(".masthead .site-heading").html('<h1></h1><span class="subheading"></span>');
  $(".masthead .site-heading h1").text(data[postNum].title);
  $(".masthead .site-heading .subheading").text(data[postNum].subtitle);
  $(".masthead .site-heading").append("<span class='meta'>Posted by <a target='_blank' href='?1'>Fred Adams</a> on " + data[postNum].time + "</span>");
  $(".container.main.active").removeClass("active");
  $(".container.main:eq(" + pageIndex + ")").addClass("active");
}