
let cvBtn=document.getElementById("cv-btn");
let submitBtn=document.getElementById("submit");
let bar=document.getElementById("bar-btn");

cvBtn.addEventListener("click",function(){
    alert("Resume Download Sucessfully")
})


submitBtn.addEventListener("click",function(){
    let email=document.getElementById("email");
    let num=document.getElementById("number")
    if(email.value==""&& num.value==""){
        alert("Fill the Details Please!");
    }
    else{
        alert("Message Submitted!");
    }
})


let ul=document.querySelector("ul");
bar.addEventListener("click",function(){
    ul.classList.toggle("showData");

    if(ul.className=="showData"){
        bar.className="fa-solid fa-xmark";
    }else{
        bar.className="fa-solid fa-bars";
    }
})