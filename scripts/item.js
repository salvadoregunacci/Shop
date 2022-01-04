document.addEventListener("DOMContentLoaded",()=>{
    const $carouselItem = document.querySelectorAll('.carousel_img'),
          $ItemDescription = document.querySelector('.info_item__description'),
          dataItemObject = JSON.parse(localStorage.dataItem),
          ItemType = dataItemObject.type,
          ItemId = dataItemObject.id;
    console.log(dataItemObject);
    // содержит пути к фото товара
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

        dreli_1:["https://content1.rozetka.com.ua/goods/images/original/10652513.jpg","https://dwt.com.ua/wa-data/public/shop/img/1-21.jpg","https://dwt.com.ua/wa-data/public/shop/img/5-19.jpg"],
        dreli_2:["https://content1.rozetka.com.ua/goods/images/original/10644487.jpg","https://content.rozetka.com.ua/goods/images/original/10644492.jpg","https://vitals.ua/image/cache/catalog/demo/electro-tools/vitals-master_um1045hl_5-1000x1000.jpg"],
        dreli_3:["https://content.rozetka.com.ua/goods/images/original/189026936.jpg","https://content1.rozetka.com.ua/goods/images/original/189027011.jpg","https://content1.rozetka.com.ua/goods/images/original/189027022.jpg"],
        dreli_4:["https://content1.rozetka.com.ua/goods/images/original/11260734.jpg","http://daewoo-sales.com.ua/image/data/dryli-udarni/dad-650/dryl-udarnyiy-daewoo-dad-650-5.jpg","https://daewoo-power.com.ua/image/data/dreli-udarnyie/dad-650/drel-udarnaya-daewoo-dad-650-3.jpg"],
        dreli_5:["https://content1.rozetka.com.ua/goods/images/original/185354699.jpg","https://content2.rozetka.com.ua/goods/images/original/185354701.jpg","https://content.rozetka.com.ua/goods/images/original/185354706.jpg"],
        dreli_6:["https://content1.rozetka.com.ua/goods/images/big/10658935.jpg","https://dewalt-ukraine.com.ua/sites/default/files/kupit-instrument-stanley-drel-udarnaya-setevaya-stanley-stdh8013-firmennyy-magazin-ukraina-ofitsialnyy-sayt-po-prodazhe-instrumenta-stanley_2.jpg","https://tdp.com.ua/images/catalog/ih5wru3iIW/1462961038_d55802debcbb25b69b703681807192c5.jpg"],

        saws_1:["https://content1.rozetka.com.ua/goods/images/original/10595320.jpg","https://content2.rozetka.com.ua/goods/images/original/10595332.jpg","https://content1.rozetka.com.ua/goods/images/original/10595345.jpg"],
        saws_2:["https://dwt.com.ua/wa-data/public/shop/products/67/01/167/images/1802/1802.970.png","https://hotline.ua/img/tx/305/3055066705.jpg","https://images.ua.prom.st/2321382009_w640_h640_tsirkulyarnaya-pila-dwt.jpg"],
        saws_3:["https://content.rozetka.com.ua/goods/images/original/22798951.jpg","https://content2.rozetka.com.ua/goods/images/original/22798970.jpg","https://content.rozetka.com.ua/goods/images/original/22799011.jpg"],
        saws_4:["https://content2.rozetka.com.ua/goods/images/original/50050111.jpg","https://content.rozetka.com.ua/goods/images/original/50050134.jpg","https://content2.rozetka.com.ua/goods/images/original/50050139.jpg"],
        saws_5:["https://content.rozetka.com.ua/goods/images/original/61384198.jpg","https://content2.rozetka.com.ua/goods/images/original/61384267.jpg","https://content.rozetka.com.ua/goods/images/original/61384363.jpg"],
        saws_6:["https://content2.rozetka.com.ua/goods/images/original/220152310.jpg","https://content2.rozetka.com.ua/goods/images/original/220152282.jpg","https://content1.rozetka.com.ua/goods/images/original/220152327.jpg"],

        perforator_1:["https://content.rozetka.com.ua/goods/images/original/10594672.jpg","https://content2.rozetka.com.ua/goods/images/original/10594546.jpg","https://content1.rozetka.com.ua/goods/images/original/10594597.jpg"],
        perforator_2:["https://content.rozetka.com.ua/goods/images/original/186571620.jpg","https://content.rozetka.com.ua/goods/images/original/186571639.jpg","https://content.rozetka.com.ua/goods/images/original/186571658.jpg"],
        perforator_3:["https://content2.rozetka.com.ua/goods/images/original/7657182.jpg","https://content.rozetka.com.ua/goods/images/original/7657183.jpg","https://content.rozetka.com.ua/goods/images/original/7657149.jpg"],
        perforator_4:["https://content1.rozetka.com.ua/goods/images/original/186668075.jpg","https://content.rozetka.com.ua/goods/images/original/186668107.jpg","https://content1.rozetka.com.ua/goods/images/original/186668220.jpg"],
        perforator_5:["https://content.rozetka.com.ua/goods/images/big/4842206.jpg","https://images.ua.prom.st/1523813638_w640_h640_perforator-zenit-zp-1100.jpg","https://images.ua.prom.st/1243176751_perforator-zenit-zp-1100.jpg"],
        perforator_6:["https://content.rozetka.com.ua/goods/images/original/71057496.png","https://stylus.ua/thumbs/568x568/cc/c4/1836580.jpeg","https://images.ua.prom.st/1845183574_w640_h640_1845183574.jpg"],

        screwdriver_1:["https://content2.rozetka.com.ua/goods/images/original/11244098.jpg","https://content.rozetka.com.ua/goods/images/original/11244088.jpg","https://content1.rozetka.com.ua/goods/images/original/11244104.jpg"],
        screwdriver_2:["https://content.rozetka.com.ua/goods/images/original/178363523.jpg","https://content1.rozetka.com.ua/goods/images/original/178363522.jpg","https://content1.rozetka.com.ua/goods/images/original/178363529.jpg"],
        screwdriver_3:["https://content1.rozetka.com.ua/goods/images/original/244880164.jpg","https://content2.rozetka.com.ua/goods/images/original/244880167.jpg","https://content2.rozetka.com.ua/goods/images/original/244880169.jpg"],
        screwdriver_4:["https://content1.rozetka.com.ua/goods/images/original/44275469.jpg","https://content.rozetka.com.ua/goods/images/original/44275470.jpg","https://content1.rozetka.com.ua/goods/images/original/44275475.jpg"],
        screwdriver_5:["https://content1.rozetka.com.ua/goods/images/original/32760360.jpg","https://www.metabo.com/ua/out/pictures/master/product/3/0007900_12v_20s_57.jpg","https://www.motoblok.biz/uploads/45/6b/e0652d1888b36a3ac8b418f360f26b45.jpg"],
        screwdriver_6:["https://content1.rozetka.com.ua/goods/images/original/22759086.jpg","https://content2.rozetka.com.ua/goods/images/original/22759068.jpg","https://content.rozetka.com.ua/goods/images/original/22759064.jpg"],

        n_1:["","",""],
    }

    SetHTMLStructure();
    document.querySelector('title').textContent = document.querySelector('.header').textContent;

    function SetHTMLStructure(){
        if(ItemType == "sale" || ItemType == "bolgarki" || ItemType == "dreli" || ItemType == "saws"
            || ItemType == "perforator" || ItemType == "screwdriver"){
            SetImageInCarousel(`${ItemType}_${ItemId}`);
            SetItemDescription(`${ItemType}_${ItemId}`);
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