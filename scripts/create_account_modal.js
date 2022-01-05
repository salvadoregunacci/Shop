const $createAccountTrigger = document.querySelector('.basket__complete_shop'),
      $createAccountWindow = document.querySelector('.create_account_modal'),
      $createAccountCloseBtn = document.querySelector('.create_account__close_btn');
let openCreateAccountWindow = false;

$createAccountTrigger.addEventListener("click", ()=>{
    openCreateAccountWindow = true;
    if(garbage.length <= 0){
        $createAccountWindow.querySelector('.create_account__text').textContent = "Немає товарів у кошику!";
        $createAccountWindow.querySelector('.create_account__text').style.fontSize = "24px";
        $createAccountWindow.querySelector(".create_account__btn").style.display = "none";
        $createAccountWindow.querySelector(".create_account__wrapper").style.height = "110px";
        $createAccountWindow.classList.add("show_d");
    }
    else{
        $createAccountWindow.querySelector('.create_account__text').textContent = "Будь-ласка, щоб завершити оформлення замовлення, увійдіть в обліковий запис";
        $createAccountWindow.querySelector('.create_account__text').style.fontSize = "20px";
        $createAccountWindow.querySelector(".create_account__wrapper").style.height = "200px";
        $createAccountWindow.querySelector(".create_account__btn").style.display = "block";
        $createAccountWindow.classList.add("show_d");
    }
});

$createAccountCloseBtn.addEventListener("click", ()=>{
    openCreateAccountWindow = false;
    $createAccountWindow.classList.remove("show_d");
});

window.addEventListener("keydown", ()=>{
    if(openCreateAccountWindow){
        openCreateAccountWindow = false;
        $createAccountWindow.classList.remove("show_d");
    }
});
