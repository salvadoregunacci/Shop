const $chevrons = document.querySelectorAll('.support__chevron');

$chevrons.forEach((item)=>{
    item.addEventListener("click", (e) =>{
        // Закрываем шеврон
        if(e.target.getAttribute("data-open") == "yes"){
            e.target.style.transform = "rotate(0deg)";
            e.target.setAttribute("data-open","no");
            CloseInfo(e.target.parentElement.parentElement);
        }
        // Открываем шеврон
        else{
            e.target.style.transform = "rotate(90deg)";
            e.target.setAttribute("data-open","yes")
            OpenInfo(e.target.parentElement.parentElement);
        }
    });
});

function OpenInfo(item){
    item.querySelector('.support__info').style.animation = "info_present_anim 0.3s ease-out forwards";
    item.querySelector('.support__info').style.display = "block";
}
function CloseInfo(item){
    item.querySelector('.support__info').style.animation = "info_close_anim 0.3s ease-out forwards";
}