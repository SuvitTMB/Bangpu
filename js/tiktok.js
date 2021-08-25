var cleararray = "";
var i = 0;
var str = "";
var sGroupPost = "TikTok";

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
  db.

  orderBy("PostTimeStamp", "desc").get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      GetAllData(doc)
    });
    //ShowData();
  });  
}



function LoadTikTok() {
  str = "";
  db.collection('PostActivity')
    .where('GroupPost','==',sGroupPost)
    .orderBy('PostTimeStamp','desc')
    .limit(100).get().then( snapshot => {
      snapshot.forEach(doc=> {
        ShowVDO(doc);
      });
  })
}


var str = "";
function ShowVDO(doc) {
  i = i+1;
  str += '<div class="list-element" id="'+i+'">';
  str += '<div class="boxTikTok" onclick="vdoTikTok(\'' + doc.data().PostVDO + '\',\'' + doc.data().PostMemo + '\')">';
  str += '<img src="./tiktok/'+ doc.data().PostPicture +'" class="imgTikTok">';
  str += '<div class="text"><div><img src="'+ doc.data().LinePicture +'" class="imgprofilevdo"><br>'+ doc.data().LineName +'</div>';
  str += '<div class="btn-t9" style="margin-top:5px;">TikTok</div>';
  str += '</div></div>';
  str += '</div>';
  $("#DisplayTikTok").html(str);
}

/*





var clip = "clip-1.jpg";
var vdo = "https://www.youtube.com/embed/LxtNgj2ZQ4s";
var sendvdo = "ถ่ายผ่านแอปลิเคชั่น Tik Tok มาโชว์กันให้คลายเครียด ในช่วงที่ปฏิบัติงาน ที่ศูนย์การเรียนรู้บางปูไม่ว่าจะ ร้อง เต้น เล่น ลิปซิ้ง หรือ กิจกรรมสุด FUN มันส์ๆ ของแต่ละคนจะเป็นทีมหรือฉายเดี่ยวก็ไม่จำกัด แต่ต้องเป็นแบบ Social Distancing ส่งมาอวดกัน ตามสไตล์ได้หมด";

var i = 0;
function ListTikTok() {
  for (i = 1; i < 40; i++) {
	  str += '<div class="list-element" id="'+i+'">';
	  str += '<div class="boxTikTok" onclick="vdoTikTok(\'' + vdo + '\',\'' + sendvdo + '\')">';
	  str += '<img src="./tiktok/'+ clip +'" class="imgTikTok">';
	  str += '<div class="text"><div class="btn-t9">TikTok</div></div>';
    str += '</div></div>';
  }
  $("#DisplayList").html(str);
  //document.getElementById("id01").style.display = "block";
}
*/


var str1 = "";
function vdoTikTok(n,y) {
  str1 += '<iframe width="240" height="420" src="'+ n +'" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  //str1 += '<div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="imgprofilevdo"> '+ sessionStorage.getItem("LineName") +'</div>';
  str1 += '<div class="text-vdo">'+ y +'</div>';
  str1 += '</div>';
  $("#DisplayVDO").html(str1);
  str1 = "";
  document.getElementById("id01").style.display = "block";
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
