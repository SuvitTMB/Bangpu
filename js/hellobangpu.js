var cleararray = "";
var i = 0;
var str = "";
var sGroupPost = "HelloBangPu";

var firebaseConfig = {
  apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
  authDomain: "retailproject-6f4fc.firebaseapp.com",
  projectId: "retailproject-6f4fc",
  storageBucket: "retailproject-6f4fc.appspot.com",
  messagingSenderId: "653667385625",
  appId: "1:653667385625:web:a5aed08500de80839f0588",
  measurementId: "G-9SKTRHHSW9"
};

firebase.initializeApp(firebaseConfig);
//var db = firebase.firestore().collection("PostActivity");
var db = firebase.firestore();


$(document).ready(function () {
  LoadTikTok();
});



function LoadTikTok() {
  db.orderBy("PostTimeStamp", "desc").get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      GetAllData(doc)
    });
    //ShowData();
  });  
}


var arrView = [];
function LoadTikTok() {
  db.collection("PostActivity")
    .orderBy("PostTimeStamp", "desc")
    .where('GroupPost','==',sGroupPost)
    //.orderBy("PostTimeStamp", "desc")
    .limit(100).get().then( snapshot => {
      snapshot.forEach(doc=> {
        //view : (doc.data().view)+1
        ShowVDO(doc);
      });
  })
}


var str = "";
function ShowVDO(doc) {
  i = i+1;
  arrView.push(doc.data().view);
  str += '<div class="list-element" id="'+i+'">';
  str += '<div class="BoxView" onclick="vdoTikTok(\'' + doc.data().PostPicture + '\',\'' + doc.data().PostMemo + '\',\'' + doc.id + '\',\'' + doc.data().PostDate + '\',\'' + doc.data().PostView + '\')">';
  str += '<div style="height:96px;overflow:hidden;"><img src="'+ doc.data().PostPicture +'" class="max-photo"></div>';
  str += '<div style="padding:5px 0px;"><div style="width:40px;float: left;"><img src="'+ doc.data().LinePicture +'" class="img-avatar"></div>';
  str += '<div class="text-photo">'+ doc.data().LineName +'<div class="text-name"><small class="mf-date">';
  str += '<i class="fa fa-clock-o"></i> '+ doc.data().PostDate +'</small></div></div>';
  str += '</div></div>';
  str += '</div>';
  $("#DisplayHello").html(str);
}


var sView = "";
var str1 = "";
var Eid = "";
function vdoTikTok(n,y,id,x,R) {

  Eid = id;
  //alert(Eid);
  db.collection("PostActivity")
    .where('PostDate','==',x).get().then( snapshot => {
      snapshot.forEach(doc=> {
        sView = doc.data().PostView;
        SaveView();
      });
  })

  //AddClick(id,x,R);
  //str1 += '<iframe width="240" height="420" src="'+ n +'" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  str1 += '<div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="imgprofilevdo"> '+ sessionStorage.getItem("LineName") +'</div>';
  str1 += '<div style="margin-top:5px;"><img src="'+ n +'" style="max-width:290px;border:2px solid #f1f1f1;border-radius:8px; "></div>';
  str1 += '<div class="text-vdo">'+ y +'</div>';
  str1 += '</div>';
  $("#DisplayVDO").html(str1);
  str1 = "";
  document.getElementById("id01").style.display = "block";
}


function SaveView() {
  //alert("Save --- "+sView);
  if(sView==null) { sView = 0; }
  db.collection("PostActivity").doc(Eid).update({
    //PostView : parseInt(sView)
    PostView : sView+1
  });
}



function CloseAll() {
    $('iframe').attr('src', $('iframe').attr('src'));
    document.getElementById('id01').style.display='none';
}



const loadmore = document.querySelector('#loadmore');
let currentItems = 9;
loadmore.addEventListener('click', (e) => {
    const elementList = [...document.querySelectorAll('.list .list-element')];
    for (let i = currentItems; i < currentItems + 9; i++) {
        if (elementList[i]) {
            elementList[i].style.display = 'block';
        }
    }
    currentItems += 9;
    // Load more button will be hidden after list fully loaded
    if (currentItems >= elementList.length) {
        event.target.style.display = 'none';
    }
})


function unloadAllJS() {
  var jsArray = new Array();
  jsArray = document.getElementsByTagName('script');
  for (i = 0; i < jsArray.length; i++){
    if (jsArray[i].id){
      unloadJS(jsArray[i].id)
    }else{
      jsArray[i].parentNode.removeChild(jsArray[i]);
    }
  }       
}
