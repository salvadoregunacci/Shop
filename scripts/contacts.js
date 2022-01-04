const $contactsBtn = document.querySelector('#contacts_trigger'),
      $contactsWindow = document.querySelector('.contacts'),
      $contactsCloseBtn = document.querySelector('.contacts__close_btn');
let contactsOpen = false;

$contactsBtn.addEventListener("click", ()=>{
    $contactsWindow.classList.add("show_d");
    contactsOpen = true;
    document.querySelector('body').style.overflowY = "hidden";
});

$contactsCloseBtn.addEventListener("click", CloseContactsWindow);

window.addEventListener("keydown", (e)=>{
    if(e.key == "Escape" && contactsOpen) CloseContactsWindow();
});

function CloseContactsWindow(){
    $contactsWindow.classList.remove("show_d");
    document.querySelector('body').style.overflowY = "scroll";
}
