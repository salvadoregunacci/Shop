let garbage = {};
const productsLink = document.querySelectorAll('#add_item_link');
console.log(productsLink);

productsLink.forEach((item,i)=>{
    item.addEventListener("click", (e)=>{
        PressAddToGarbageBtn(e,i);
    })
});

function PressAddToGarbageBtn(e,i){
    // e.preventDefault();
    console.log(e.target);
    if(e.target.classList.contains("products__item_add_btn")){
        
    }
    else{
        window.location.href = "/item.html";
    }
}