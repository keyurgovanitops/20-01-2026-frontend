const purchaseBtn = document.getElementById("purchase-btn");
const img = document.querySelector("#img");
// const msg = document.getElementById("message");
let h1 = document.getElementsByTagName("h1");
h1 = h1[0];
let content = h1.textContent;
h1.textContent = null;

let count = 0;


let textAnimater = setInterval(() => {
    if(count < content.length){
        h1.textContent += content[count];
        count++;
    }else{
        clearInterval(textAnimater);
    }
}, 100);


// purchaseBtn.addEventListener("click",()=>{
//     msg.textContent = "Purchased successfully";
//     purchaseBtn.remove();
// })
// img.style.width = "250px";
// img.style.height = "250px";
// let flag = "True";
// purchaseBtn.addEventListener("click", () => {
//     // msg.textContent = "Purchased successfully";
//     // purchaseBtn.remove();
//     if (flag == "True") {
//         img.src = "https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"
//         flag = "False";
//     }
//     else {
//         img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtqCEA6Ht1GsjuaDrbxmNrG3zRCz9Z7mXdYQ&s";
//         flag = "True";
//     }
// }
// )
