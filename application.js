let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let li=document.querySelector("li");
let inp=document.querySelector("input");


btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("Delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";
});


let delBtns = document.querySelectorAll(".btn");
for(delbtn of delBtns){
    delbtn.addEventListener("click",function(){
    //    console.log("get deleted");
    let par=this.parentElement;
    par.remove();
    })
}
