var data = [
];
var newData = [];
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
  addPosts();
  if(getQueryVariable("post")){
    gotoPost(getQueryVariable("post"));
  }else{
    $(".container:eq(1)").removeClass("active");
    $(".container:eq(0)").addClass("active");
  }
});
var postHTML = [
  '<a class="post-link" href="?post=',
  true,
  '"><p>',
  true,
  '</p><h2 class="post-title">',
  true,
  '</h2><h3 class="post-subtitle">',
  true,
  '</h3></a>'
];
function addPosts(){
  var dataIndex = 0;
  while(data[dataIndex]){
    newData.push(data[dataIndex]);
    dataIndex+=1;
  }
  $(".post-list .loading").remove();
  for(var i=newData.length-1;i>=0;i-=1){
    let tempPreviewHTML = "";
    let tempData = [i,generateDate(data[i].time),data[i].title,data[i].subtitle];
    let itemVarDataIndex = 0;
    postHTML.forEach(function(item,index){
      if(item==true){
        tempPreviewHTML+=tempData[itemVarDataIndex];
        itemVarDataIndex+=1;
      }else{
        tempPreviewHTML+=item;
      }
    });
    $(".post-list").append(tempPreviewHTML);
  }
  if(!$(".post-list").html()){
    $(".post-list").append("<div class='loading'>Sorry, No Posts Yet</div>")
  }
}
function gotoPost(postNum){
  $("html, body").scrollTop(0);
  
  $(".container:eq(0)").removeClass("active");
  $(".container:eq(1)").addClass("active");
  $(".container:eq(1)").html("<h1>" + data[postNum].title + "</h1><p class='muted'>" + generateDate(data[postNum].time) +  "</p><br>" + data[postNum].post);
  $("body").append("<script src='vendor/prism.js'></script>");
}