const $facebookForm = document.querySelector('.facebook__form'),
      $completeWindowFacebook = document.querySelector('.facebook__complete_window');

$facebookForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    $completeWindowFacebook.style.display = "flex";
});
