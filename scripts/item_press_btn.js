document.addEventListener("DOMContentLoaded", ()=>{
    const $items = document.querySelectorAll('.products__item');
    let dataItemObject = {
        id: "",
        type: ""
    };
// Вешаем события клика на карточки товара
    $items.forEach((item)=>{
        item.addEventListener("click", (e)=>{
            if(GetStatusAttribute(e)){
                dataItemObject.id = e.currentTarget.getAttribute("item_id");
                dataItemObject.type = e.currentTarget.getAttribute("item_type");
                localStorage.dataItem = JSON.stringify(dataItemObject);
            }
            
        });
    });
});

// Проверяет в каком статусе атрибут item_type у выбраного обьекта, если все ок - true, иначе (если такого атрибута нет - false)
function GetStatusAttribute(e){
    if(e.currentTarget.getAttribute("item_type") == "sale"       || 
       e.currentTarget.getAttribute("item_type") == "bolgarki"   ||
       e.currentTarget.getAttribute("item_type") == "dreli"      ||
       e.currentTarget.getAttribute("item_type") == "perforator" ||
       e.currentTarget.getAttribute("item_type") == "screwdriver"||
       e.currentTarget.getAttribute("item_type") == "saws"){
            return true;
       }
    else return false;       
}