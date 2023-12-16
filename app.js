
let cvBtn=document.getElementById("cv-btn");
let submitBtn=document.getElementById("submit");

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

