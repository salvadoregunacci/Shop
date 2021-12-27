document.addEventListener("DOMContentLoaded", ()=>{
    const $items = document.querySelectorAll('.products__item');
    let dataItemObject = {
        id: "",
        type: ""
    };
    
    $items.forEach((item)=>{
        item.addEventListener("click", (e)=>{
            if(e.currentTarget.getAttribute("item_type") == "sale"){
                dataItemObject.id = e.currentTarget.getAttribute("item_id");
                dataItemObject.type = e.currentTarget.getAttribute("item_type");
                localStorage.dataItem = JSON.stringify(dataItemObject);
            }
            if(e.currentTarget.getAttribute("item_type") == "bolgarki"){
                dataItemObject.id = e.currentTarget.getAttribute("item_id");
                dataItemObject.type = e.currentTarget.getAttribute("item_type");
                localStorage.dataItem = JSON.stringify(dataItemObject);
            }
        });
    });
});