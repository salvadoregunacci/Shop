const $myProfileBtn = document.querySelector('#my_profile_trigger'),
      $myProfileWindow = document.querySelector('.my_profile'),
      $myProfileCloseBtn = document.querySelector('.my_profile__close_btn');
let myProfileOpen = false;

$myProfileBtn.addEventListener("click", ()=>{
    $myProfileWindow.classList.add("show_d");
    myProfileOpen = true;
    document.querySelector('body').style.overflowY = "hidden";
});

$myProfileCloseBtn.addEventListener("click", CloseMyProfileWindow);

window.addEventListener("keydown", (e)=>{
    if(e.key == "Escape" && myProfileOpen) CloseMyProfileWindow();
});

function CloseMyProfileWindow(){
    $myProfileWindow.classList.remove("show_d");
    document.querySelector('body').style.overflowY = "scroll";
}
