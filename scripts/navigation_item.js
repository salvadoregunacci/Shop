let nav = document.querySelector('.products__navigation');
window.addEventListener("scroll", ()=>{
    console.log(window.pageYOffset);
    if(window.pageYOffset >= 775){
        nav.style.left = "0";
    }
    if(window.pageYOffset < 870){
        nav.style.left = "-321px";
    }
});
