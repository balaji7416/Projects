let btn = document.querySelector("#scroll_top");

window.addEventListener("scroll",()=>{
    if(window.scrollY > 200){
        btn.classList.add("show");
    }
    else{
        btn.classList.remove("show");
    }
});

btn.addEventListener("click",()=>{
    window.scrollTo({top:0, behavior:"smooth"});
});