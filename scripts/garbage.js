let garbage = []; //массив с добавленными в корзину товарами
let windowOpen = false;
const productsLink = document.querySelectorAll('#add_item_link'),
      addProductWindow = document.querySelector('.products__add_product_window');

productsLink.forEach((item,i)=>{
    item.addEventListener("click", (e)=>{
        PressAddToGarbageBtn(e,i);
    })
});

addProductWindow.querySelector(".window__close_btn").addEventListener("click", CloseAddItemWindow);
addProductWindow.querySelector(".window__next_shop_btn").addEventListener("click", CloseAddItemWindow);

window.addEventListener("keydown", (e)=>{
    if(e.key == "Escape" && windowOpen){
        CloseAddItemWindow();
    }
});
// Если добавили товар в корзину
function PressAddToGarbageBtn(e,i){
    if(e.target.classList.contains("products__item_add_btn")){ // Если нажали именно на кнопку "в корзину"
        OpenAddItemWindow();
        garbage[counter()] = productsLink[i];
    }
    else{ // Если нажали на карточку товара
        window.location.href = "/item.html";
    }
}

function OpenAddItemWindow(){
    windowOpen = true;
    addProductWindow.classList.add("show_d");
}
function CloseAddItemWindow(){
    if(windowOpen){
        addProductWindow.classList.remove("show_d");
        windowOpen = false;
    }
}

const counter = Counter();
function Counter(){
    let i=0;
    return function(){
        return i++;
    }
}