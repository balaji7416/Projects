let Taskarea = document.querySelector(".taskText");
let addBtn = document.querySelector("#add_button");
let taskList = document.querySelector(".taskList");
let clearall = document.querySelector(".deleteAll");

addBtn.addEventListener("click",()=>{
    let text =Taskarea.value.trim();
    if(text==="") return;

    let li = document.createElement("li");
    let htmlText = 
    `<span>${text}</span>
    <button class="delete">❌</button>
    `;
    li.innerHTML=htmlText;
    taskList.appendChild(li);
    Taskarea.value="";
    Taskarea.focus();
})

taskList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        e.target.closest("li").remove();
    }
})


clearall.addEventListener("click",()=>{
        taskList.innerHTML="";
    })