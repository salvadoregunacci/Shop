let navMenu = document.querySelector('.products__navigation'),
    productsContainer = document.querySelector('.products .container');

window.addEventListener("scroll", ()=>{
    // console.log(window.pageYOffset);
    if(window.pageYOffset >= 775){
        navMenu.style.left = "0";
        productsContainer.style.marginLeft = "340px";
    }
    if(window.pageYOffset < 870){
        productsContainer.style.marginLeft = "220px";
        navMenu.style.left = "-321px";
    }
});

document.querySelector('body').addEventListener("mouseenter",()=>{
    if(window.pageYOffset >= 775){
        navMenu.style.left = "0";
        productsContainer.style.marginLeft = "340px";
    }
});
