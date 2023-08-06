let name2=document.getElementById("name");
let submit=document.getElementById("submit");

submit.addEventListener('focus',()=>{
    if(name2.value==""){
        submit.style="{transform:translate(40px)}"
    }
})