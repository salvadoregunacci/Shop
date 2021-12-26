document.addEventListener("DOMContentLoaded",()=>{
    const $carouselItem = document.querySelectorAll('.carousel_img'),
          $ItemDescription = document.querySelector('.info_item__description'),
          dataItemObject = JSON.parse(localStorage.dataItem),
          ItemType = dataItemObject.type,
          ItemId = dataItemObject.id;
    console.log(dataItemObject);
    // содержит обьекты внутри массивы внутри которых пути к фото товара
    // ВАЖНО! sale_1 , sale - КАТЕГОРИЯ ТОВАРА, 1 - ID ТОВАРА
    const itemImages = {
        sale_1: ["https://content.rozetka.com.ua/goods/images/original/13361049.jpg", "https://content1.rozetka.com.ua/goods/images/original/13361103.jpg", "https://content.rozetka.com.ua/goods/images/original/13361126.jpg"],
        sale_2: ["https://content.rozetka.com.ua/goods/images/original/186483160.jpg","https://content.rozetka.com.ua/goods/images/original/186483250.jpg","https://content.rozetka.com.ua/goods/images/original/186483937.jpg"],
        sale_3: ["https://content2.rozetka.com.ua/goods/images/original/48186899.jpg","https://content2.rozetka.com.ua/goods/images/original/48186929.jpg","https://content1.rozetka.com.ua/goods/images/original/48186943.jpg"],
        sale_4: ["https://content1.rozetka.com.ua/goods/images/original/197707118.jpg","https://content2.rozetka.com.ua/goods/images/original/197707119.jpg","https://content2.rozetka.com.ua/goods/images/original/197707122.jpg"],
        sale_5: ["https://content1.rozetka.com.ua/goods/images/original/10997269.jpg","https://content2.rozetka.com.ua/goods/images/original/10997294.jpg","https://content.rozetka.com.ua/goods/images/original/10997311.jpg"],
        sale_6: ["https://content.rozetka.com.ua/goods/images/original/10604455.jpg","https://content1.rozetka.com.ua/goods/images/original/10604474.png","https://content.rozetka.com.ua/goods/images/original/10604455.jpg"],


    }
    
    if(ItemType == "sale"){
        switch(ItemId){
            case "1": SetImageInCarousel("sale_1"); 
                      SetItemDescription(); break;
            case "2": SetImageInCarousel("sale_2"); break;
            case "3": SetImageInCarousel("sale_3"); break;
            case "4": SetImageInCarousel("sale_4"); break;
            case "5": SetImageInCarousel("sale_5"); break;
            case "6": SetImageInCarousel("sale_6"); break;
        }
    }
    
    function SetItemDescription(){
        $ItemDescription.innerHTML = ItemInfo["sale_1"];
    }
    
    function SetImageInCarousel(id){
        let i = 0;
        $ItemDescription.innerHTML = ItemInfo.sale_1;
        $carouselItem.forEach((item)=>{
            item.setAttribute("src", itemImages[id][i]);
            i++;
        });
    }
});