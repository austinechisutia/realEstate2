document.addEventListener("click", (event)=>{
    const menu = document.getElementById("menuItems");
    const isClickInside = menu.contains(event.target);

    if(menu.classList.contains("show") && !isClickInside){
        bootstrap.Collapse.getInstance(menu)?.hide();
    }
})