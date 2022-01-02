const dropMenuTrigger = document.querySelector('#dropmenu_triger'),
      dropmenuLines = document.querySelector('.dropmenu_lines'),
      dropmenu = document.querySelector('.dropmenu');

dropMenuTrigger.addEventListener("mouseenter", ()=>{
    dropmenu.classList.remove("dropmenu_close_animation");
    dropmenu.classList.add("dropmenu_present_animation");
    dropmenuLines.style.transform = "rotate(90deg)";
});
dropMenuTrigger.addEventListener("click", ()=>{
    dropmenu.classList.remove("dropmenu_present_animation");
    dropmenu.classList.add("dropmenu_close_animation");
    dropmenuLines.style.transform = "rotate(0deg)";
});

dropmenu.addEventListener("mouseleave", ()=>{
    dropmenu.classList.remove("dropmenu_present_animation");
    dropmenu.classList.add("dropmenu_close_animation");
    dropmenuLines.style.transform = "rotate(0deg)";
});