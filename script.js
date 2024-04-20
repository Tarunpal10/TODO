const text= document.getElementById("todo-text")
const listcontainer=document.getElementById("list-container")
// const spancontainer=document.getElementById("span-container")

function add(){
    if (text.value===""){
        alert("enter the text first")
    }else{
        let li= document.createElement("li")
        li.innerHTML=text.value;
        listcontainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span);
        
        // let check=document.createElement("checkbox")
        // console.log(li)
    }
    text.value=""
    savedata();
}


listcontainer.addEventListener("click",function(e){

 if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    savedata()
}else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    savedata()
}
},false)
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data")
}
showtask();