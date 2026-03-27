let form = document.querySelector("form");
let submit = document.getElementById("submit");
let p1 = document.getElementById("nameError");
let p2 = document.getElementById("emailError");
let p3 = document.getElementById("messageError");
let p4 = document.getElementById("genderError");

let i1 = document.getElementById("nameInput");
let i2 = document.getElementById("emailInput");
let i3 = document.getElementById("messageInput");

let r1 = document.getElementsByName("gender");
console.log(r1);
let user_data = [
    
];

// ek to validate | submit 

function showErrors(){
    if(i1.value == ''){
        p1.textContent = "Please enter your Name";
    }
    
    if(i2.value == ''){
        p2.textContent = "Please Enter your Email";
    }
    if(i3.value == ''){
        p3.textContent = "Please Enter your Message";
    }
    if(!checkGender()){
        p4.textContent = "Please select your gender";
    }
}

function checkGender(){
    if(r1[0].checked || r1[1].checked || r1[2].checked){
        return true;
    }else{
        return false;
    }
}

function giveGender(){
    if(r1[0].checked){
        return r1[0].value;
    }
    if(r1[1].checked){
        return r1[1].value;
    }
    if(r1[2].checked){
        return r1[2].value;
    }
}

function validateForm(){ // sare field agar filled hai to true warna false
    if(i1.value != '' && i2.value!= '' && i3.value != '' && checkGender()){
        return true;
    }else{
        return false;
    }
}


submit.addEventListener("click" , (e) => {
    e.preventDefault();
    if(validateForm()){
        let inputObj = {
            name : i1.value,
            email : i2.value,
            message : i3.value,
            gender : giveGender()
        }
        console.log('obj from submit', inputObj);
        user_data.push(inputObj);
        console.log(user_data);
    }else {
        showErrors();
    }

})


i1.addEventListener("input", (e)=>{
     p1.textContent = "";
})
i2.addEventListener("input", (e)=>{
    p2.textContent = "";
})
i3.addEventListener("input", (e)=>{
    p3.textContent = "";
});
r1[0].addEventListener("input",()=>{
    console.log("0 fired");
    p4.textContent = "";
})
r1[1].addEventListener("input",()=>{
    console.log("1 fired");
    p4.textContent = "";
})
r1[2].addEventListener("input",()=>{
    console.log("2 fired");
    p4.textContent = "";
})

