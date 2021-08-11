// Creating questionss and answers
//*****************************************************************************

$(document).ready(function () {
  main();
});


async function main() {
  await liff.init({ liffId: "1655966947-RLMQZVjk" });
  document.getElementById("isLoggedIn").append(liff.isLoggedIn());
  if(liff.isLoggedIn()) {
    getUserProfile();
  } else {
    liff.login();
  }
}


async function getUserProfile() {
  const profile = await liff.getProfile();
  //document.getElementById("userId").append(profile.userId);
  sessionStorage.setItem("LineID", profile.userId);
  sessionStorage.setItem("LineName", profile.displayName);
  sessionStorage.setItem("LinePicture", profile.pictureUrl);
  alert(profile.userId);
}


function openWindow() {
  liff.openWindow({
    url: "https://line.me",
    external: true     
  })
}


