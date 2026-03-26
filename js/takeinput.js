let form = document.getElementsByTagName("form");
let p1 = document.getElementById("nameerror");
let p2 = document.getElementById("emailerror");
let p3 = document.getElementById("messageerror");
let i1 = document.getElementById("nameInput");
let i2 = document.getElementById("emailInput");
let i3= document.getElementById("messageInput");
let submitBtn = document.getElementById("submitBtn");
let gender = document.getElementsByName("gender");

console.log(gender);

let userData = [
    {
        name : 'name',
        email : 'email',
        message : 'message'
    },
    {

    }
];

submitBtn.addEventListener("submit",()=>{
    
})
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("bhar diya");
    if(i1.value == ''){
        p1.textContent = "NAME NAHI HE KE?";
    }
    
    if(i2.value == ''){
        p2.textContent = "EMAIL NAHI HE KE?";
    }
    if(i3.value == ''){
        p3.textContent = "MESSAGE NAHI HE KE?";
    }

    // code likha ki usko database me daldo
    console.log();
    if(gender[0].checked){
        console.log("male hai")
    }

    if(gender[1].checked){
        console.log("female hai")
    }
    console.log();
});

i1.addEventListener("input",()=>{
    p1.remove();
})

i2.addEventListener("input",()=>{
    p2.remove();
})

i3.addEventListener("input",()=>{
    p3.remove();
})