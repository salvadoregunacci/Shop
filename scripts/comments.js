const $userCommentsInput = document.querySelector('.comments__user_input'),
      $btnSendComment = document.querySelector('.add_user_comments_btn'),
      $commentsModal = document.querySelector('.comments__modal'),
      $commentsNoTextInfo = document.querySelector('.comments__no_text'),
      $likeComment = document.querySelectorAll('.like'),
      $dislikeComment = document.querySelectorAll('.dislike');
let modalOpen = false;

$btnSendComment.addEventListener("click", ()=>{
     if($userCommentsInput.value != ""){
        $commentsModal.style.display = "flex";
        setTimeout(()=> {
            CloseModal();
        }, 4000);
        modalOpen = true;
     }
     else{
        $commentsNoTextInfo.style.display = "flex";
        $commentsNoTextInfo.style.animation = "no_text_present_anim 0.3s ease-out forwards";

        setTimeout(()=>{
            $commentsNoTextInfo.style.animation = "no_text_exit_anim 0.3s ease-in forwards";
            setTimeout(()=>{
                $commentsNoTextInfo.style.display = "none";
            }, 1000);
        }, 2000);
     }
});

$commentsModal.querySelector(".modal__close_btn").addEventListener("click", ()=>{
    CloseModal();
});

window.addEventListener("keydown", (e)=>{
    if(e.key == "Escape" && modalOpen == true){
        $userCommentsInput.value = "";
        $commentsModal.style.display = "none";
    }
});

function CloseModal(){
    $userCommentsInput.value = "";
    $userCommentsInput.style.backgroundColor = "rgb(240, 240, 240)";
    $userCommentsInput.setAttribute("placeholder", "Дякуємо за відгук!");
    $userCommentsInput.disabled = true;
    $btnSendComment.disabled = true;
    $commentsModal.style.display = "none";
    modalOpen = false;
}


$likeComment.forEach((item)=>{
    item.addEventListener("click", () => {
        if(!item.parentElement.hasAttribute("data-check")){
            item.style.color = "rgb(0, 187, 0)";
            item.parentElement.setAttribute("data-check","");
        }
    });
});

$dislikeComment.forEach((item)=>{
    item.addEventListener("click", ()=>{
        if(!item.parentElement.hasAttribute("data-check")){
            item.style.color = "red";
            item.parentElement.setAttribute("data-check","");
        }
    });
});


$likeComment.forEach((item)=>{
    item.addEventListener("mouseenter", () => {
        if(!item.parentElement.hasAttribute("data-check")){
            item.style.color = "rgb(0, 187, 0)";
        }
    });
    item.addEventListener("mouseleave", () => {
        if(!item.parentElement.hasAttribute("data-check")){
            item.style.color = "black";
        }
    });
});
$dislikeComment.forEach((item)=>{
    item.addEventListener("mouseenter", () => {
        if(!item.parentElement.hasAttribute("data-check")){
            item.style.color = "red";
        }
    });
    item.addEventListener("mouseleave", () => {
        if(!item.parentElement.hasAttribute("data-check")){
            item.style.color = "black";
        }
    });
});