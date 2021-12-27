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

        bolgarki_1:["https://content1.rozetka.com.ua/goods/images/original/10747707.jpg","https://content1.rozetka.com.ua/goods/images/original/10747747.jpg","https://content.rozetka.com.ua/goods/images/original/10747756.jpg"],
        bolgarki_2:["https://content.rozetka.com.ua/goods/images/original/17660005.jpg","https://era-elektroniki.com.ua/img/instruments/power-tools/angle-grinders/212195/metabo-w-750-125-set-603605690--212195_2.jpg","https://hotline.ua/img/tx/305/3053975075.jpg"],
        bolgarki_3:["https://content.rozetka.com.ua/goods/images/original/10594671.jpg","https://i.eldorado.ua/goods_images/1284670/6499289-1577198675.jpg","https://img.moyo.ua/img/gallery/888/35/624359_main.jpg?1513071590"],
        bolgarki_4:["https://content2.rozetka.com.ua/goods/images/original/8430102.jpg","https://e-altsest.com/image/cache/catalog/bolg/stark-cag1800%286%29-500x500.jpg","https://e-altsest.com/image/cache/catalog/bolg/stark-cag1800%283%29-500x500.jpg"],
        bolgarki_5:["https://content.rozetka.com.ua/goods/images/original/197364178.jpg","https://content2.rozetka.com.ua/goods/images/original/197364175.jpg","https://content1.rozetka.com.ua/goods/images/original/197364176.jpg"],
        bolgarki_6:["https://content1.rozetka.com.ua/goods/images/original/14460329.jpg","https://content1.rozetka.com.ua/goods/images/original/25849564.jpg","https://content2.rozetka.com.ua/goods/images/original/25849578.jpg"],
    }
    
    if(ItemType == "sale"){
        switch(ItemId){
            case "1": SetImageInCarousel("sale_1"); 
                      SetItemDescription("sale_1"); break;
            case "2": SetImageInCarousel("sale_2"); 
                      SetItemDescription("sale_2"); break;
            case "3": SetImageInCarousel("sale_3"); 
                      SetItemDescription("sale_3"); break;
            case "4": SetImageInCarousel("sale_4"); 
                      SetItemDescription("sale_4"); break;
            case "5": SetImageInCarousel("sale_5"); 
                      SetItemDescription("sale_5"); break;
            case "6": SetImageInCarousel("sale_6"); 
                      SetItemDescription("sale_6"); break;
        }
    }
    if(ItemType == "bolgarki"){
        switch(ItemId){
            case "1": SetImageInCarousel("bolgarki_1"); 
                      SetItemDescription("bolgarki_1"); break;
            case "2": SetImageInCarousel("bolgarki_2"); 
                      SetItemDescription("bolgarki_2"); break;
            case "3": SetImageInCarousel("bolgarki_3"); 
                      SetItemDescription("bolgarki_3"); break;
            case "4": SetImageInCarousel("bolgarki_4"); 
                      SetItemDescription("bolgarki_4"); break;
            case "5": SetImageInCarousel("bolgarki_5"); 
                      SetItemDescription("bolgarki_5"); break;
            case "6": SetImageInCarousel("bolgarki_6"); 
                      SetItemDescription("bolgarki_6"); break;
        }
    }
    
    function SetItemDescription(id){
        $ItemDescription.innerHTML = ItemInfo[id];
    }
    
    function SetImageInCarousel(id){
        let i = 0;
        // $ItemDescription.innerHTML = ItemInfo.sale_1;
        $carouselItem.forEach((item)=>{
            item.setAttribute("src", itemImages[id][i]);
            i++;
        });
    }
});