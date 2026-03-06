let data; 
setTimeout(() => {
    dataPrinter(data);
}, 1000);

fetch('https://fakestoreapi.com/products')
            .then((res)=>{
                console.log(res);
                return res.json();
            })
            .then((datafromapi)=>{ 
                // console.log('second then',bijo);
                data = datafromapi;
            })
            .catch((error)=>{
                console.log(error)
            })



let containerElement = document.querySelector('.container');


let mybtn = document.querySelector('.mybtn');


title.innerText = "Title";
    myimg.src = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png";
    myimg.height = "50";
    price.innerText = "this will be price"


    



function dataPrinter(data) {
    data.map((item) => {
        let title = document.createElement("h1");
        let myimg = document.createElement("img");
        let price = document.createElement("p");
        myimg.height = "50";

        title.innerText = `Title : ${item.title}`;
        myimg.src = item.image;
        price.innerText = `Price : ${item.price}`;

        containerElement.append(title);
        containerElement.append(myimg);
        containerElement.append(price);
        console.log(item);
    })      
}




