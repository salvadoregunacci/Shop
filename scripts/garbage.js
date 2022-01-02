let garbage = []; //массив с добавленными в корзину товарами
let windowOpen = false;
let summa = 0;
const productsLink = document.querySelectorAll('#add_item_link'),
      addProductWindow = document.querySelector('.products__add_product_window'),
      basketWindow = document.querySelector('.basket'),
      navBtnBasket = document.querySelector('.basket_h'),
      navPromoIterator = document.querySelector('.basket_h__iterator'),
      sidebarBasketIterator = document.querySelector('.basket_icon_sidebar');
let $summa = document.querySelector('#summa');
let $basketRowsItems;
let $countItemInBasket;

// клик по кнопке "КОШИК" в навигаторе вверху
navBtnBasket.addEventListener("click", ()=>{
    OpenBasketWindow();
});
// клик по кнопке "КОШИК" в сайдбаре
sidebarBasketIterator.addEventListener("click", ()=>{
    OpenBasketWindow();
});

productsLink.forEach((item, i) => {
    item.addEventListener("click", (e) => {
        PressAddToGarbageBtn(e, i);
    })
});
//если нажали на кнопку "В КОРЗИНУ"
document.querySelector('.window__go_garbage_btn').addEventListener("click", () => {
    OpenBasketWindow();
});

addProductWindow.querySelector(".window__close_btn").addEventListener("click", CloseAddItemWindow);
addProductWindow.querySelector(".window__next_shop_btn").addEventListener("click", CloseAddItemWindow);

window.addEventListener("keydown", (e) => {
    if (e.key == "Escape" && windowOpen) {
        CloseAddItemWindow();
    }
});
let counter = 0;
// Если добавили товар в корзину
function PressAddToGarbageBtn(e, i) {

    // если обратно нажал на "ДОБАВЛЕНО"
    if(e.target.classList.contains("products__item_complete_btn")){
      const item = e.target.parentElement;
      item.style.boxShadow = "none";
      DeleteItem(e.target);
      for(let i=0; i< garbage.length; i++){
        if(item.getAttribute("item_type") == garbage[i].querySelector(".products__item").getAttribute("item_type") && item.getAttribute("item_id") == garbage[i].querySelector(".products__item").getAttribute("item_id")){
           garbage.splice(i,1);
           counter--;
           SelectNavIterator();
        }
      }
      return;
    }
    if (e.target.classList.contains("products__item_add_btn")) { // Если нажали именно на кнопку "в корзину"
        SelectItem(e.target);
        productsLink[i].querySelector(".products__item").style.boxShadow = "inset 1px 1px 15px rgba(0,128,0, 1)";
        OpenAddItemWindow();
        garbage[counter++] = productsLink[i];
        SelectNavIterator();
    } else { // Если нажали на карточку товара
        window.open('/item.html');
    }
}
function SelectNavIterator(){
    sidebarBasketIterator.querySelector("#sidebarBasketIterator").textContent = garbage.length;
    navPromoIterator.textContent = garbage.length;
    navPromoIterator.style.backgroundColor = "green";
    sidebarBasketIterator.querySelector("#sidebarBasketIterator").style.backgroundColor = "green";
    if(garbage.length < 1){
        navPromoIterator.style.backgroundColor = "rgb(207, 71, 71)";
        sidebarBasketIterator.querySelector("#sidebarBasketIterator").style.backgroundColor = "rgb(211, 39, 39)";
    }
}
function SelectItem(e){
    e.classList.remove("products__item_add_btn");
    e.classList.add("products__item_complete_btn");
    e.textContent = "✔ Додано"
}
function DeleteItem(e){
    e.classList.remove("products__item_complete_btn");
    e.classList.add("products__item_add_btn");
    e.textContent = "в кошик"
}


function OpenAddItemWindow() {
    windowOpen = true;
    addProductWindow.classList.add("show_d");
    document.querySelector('body').style.overflowY = "hidden";
}

function CloseAddItemWindow() {
    if (windowOpen) {
        addProductWindow.classList.remove("show_d");
        windowOpen = false;
        document.querySelector('body').style.overflowY = "scroll";
    }
}

/////////////////////////////
//        КОРЗИНА
////////////////////////////
const $basketItemsWrapper = document.querySelector('.basket__items_wrapper');

basketWindow.querySelector(".basket__close_btn").addEventListener("click", () => {
    CloseAddItemWindow();
    CloseBasketWindow();
});

// нажатие на кнопку "Продовжити покупки"
document.querySelector('.basket__continue_shop_btn').addEventListener("click", CloseBasketWindow);

function SetItemsInBasket(i) {
    $basketItemsWrapper.innerHTML += `
    <div class="basket__row basket__row_items">
        <div class="basket__col-1 basket__col_first">
            <div class="basket__photo_item"><img src="${garbage[i].querySelector("img").getAttribute("src")}" alt="item"></div>
            <div class="basket__name_item"><span>${garbage[i].querySelector(".products__item_name").textContent}</span></div>
        </div>
        <div class="basket__col-2">
            <div class="basket__price_item">${garbage[i].querySelector(".current_price").textContent}</div>
        </div>
        <div class="basket__col-3">
            <input class="basket__count_item" type="number" min="1" max="5" value="1">
            </div>
            </div>
            <div class="basket__line"></div>
            `
}
function SetEmptyImgBasket(){
    $basketItemsWrapper.innerHTML += `
        <img src="/img/basket/robot_icon_t.png" alt="robot" class="basket__here_empty">
    `
}

function CloseBasketWindow() {
    document.querySelector('body').style.overflowY = "scroll";
    CloseAddItemWindow();
    basketWindow.classList.remove("show_d");
}

function OpenBasketWindow() {
    document.querySelector('body').style.overflowY = "hidden";
    ClearBasketWindow();
    if(garbage.length <= 0){
        SetEmptyImgBasket();
    }
    basketWindow.classList.add("show_d");
    if (garbage.length != 0) {
        for (let i = 0; i < garbage.length; i++) {
            if (garbage[i] != undefined) {
                SetItemsInBasket(i);
            }
        }
    }
    $countItemInBasket = document.querySelectorAll('.basket__count_item');
    $countItemInBasket.forEach(item=>{
        item.addEventListener("input", Summa);
    });
    $basketRowsItems = $basketItemsWrapper.querySelectorAll(".basket__row_items");

    // навели мышку на товар (добавляем иконку удаление товара)
    $basketRowsItems.forEach((item,i) => {
        item.addEventListener("mouseenter", () => {
            let deleteIcon = document.createElement("div");
            deleteIcon.classList.add("basket__delete_icon");
            deleteIcon.textContent = "✖";
            item.append(deleteIcon);
            deleteIcon.addEventListener("click", () => {
                deleteIcon.parentElement.setAttribute("data-delete", "");
                let deleteIndex;
                $basketRowsItems = $basketItemsWrapper.querySelectorAll(".basket__row_items");
                $basketRowsItems.forEach((item,x) =>{
                    if(item.hasAttribute("data-delete")) {
                        deleteIndex = x;
                    }
                });
                productsLink.forEach((linkItem)=>{
                    // возвращаем карточку в исходный вид, если юзер удалил товар в корзине
                    if(linkItem.querySelector(".products__item").getAttribute("item_type") == garbage[deleteIndex].querySelector(".products__item").getAttribute("item_type") && linkItem.querySelector(".products__item").getAttribute("item_id") == garbage[deleteIndex].querySelector(".products__item").getAttribute("item_id"))
                    {
                        linkItem.querySelector(".products__item").style.boxShadow = "none";
                        DeleteItem(linkItem.querySelector(".products__item_complete_btn"));
                    }
                });
                DeleteItemInBasket();
                deleteIcon.parentElement.nextSibling.nextSibling.remove();
                deleteIcon.parentElement.remove();
                if(garbage.length <= 0){
                    SetEmptyImgBasket();
                }
            });
        });
    });
    // убрали мышку из товара (скрываем иконку удаление товара)
    $basketRowsItems.forEach((item) => {
        item.addEventListener("mouseleave", () => {
            item.querySelector(".basket__delete_icon").remove();
        });
    });
    Summa();
}

function ClearBasketWindow() {
    $basketItemsWrapper.innerHTML = ``;
}
function Summa(){
    summa=0;
    // подсчитываем СУММУ ПОКУПКИ
    for(let i=0; i< garbage.length; i++){
        let str = garbage[i].querySelector(".current_price").textContent;
        str = str.replace(/[^0-9]/g, '');
        summa +=  Number(str) * $basketRowsItems[i].querySelector(".basket__count_item").value;
    }
    $summa.textContent = summa;
}
// удаляем товар из корзины
function DeleteItemInBasket() {
    let indexDelete = -1;
    const deleteObj = $basketItemsWrapper.querySelectorAll(".basket__row_items");

    for (let i = 0; i < deleteObj.length; i++) {
        if (deleteObj[i].hasAttribute("data-delete")) {
            indexDelete = i;
            break;
        }
    }
    garbage.splice(indexDelete, 1);
    SelectNavIterator();
    counter--;
    Summa();
}