const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');

function effect1(input){
    if(input == 'a'){
        card2.classList.add("effect");
        card3.classList.add("effect");
    }else{
        card2.classList.remove("effect");
        card3.classList.remove("effect");
    }
    
}

card1.addEventListener('mouseover', () => {
    card1.style.transform = 'scale(1.03)';
    effect1('a');
})

card1.addEventListener('mouseout', () => {
    card1.style.transform = 'scale(1.0)';
    effect1('r');
})

function effect2(input){
    if(input == 'a'){
        card1.classList.add("effect");
        card3.classList.add("effect");
    }else{
        card1.classList.remove("effect");
        card3.classList.remove("effect");
    }
    
}
card2.addEventListener('mouseover', () => {
    card2.style.transform = 'scale(1.03)';
    effect2('a');
})

card2.addEventListener('mouseout', () => {
    card2.style.transform = 'scale(1.0)';
    effect2('r');
})

function effect3(input){
    if(input == 'a'){
        card1.classList.add("effect");
        card2.classList.add("effect");
    }else{
        card1.classList.remove("effect");
        card2.classList.remove("effect");
    }
}
card3.addEventListener('mouseover', () => {
    card3.style.transform = 'scale(1.03)';
    effect3('a');
})

card3.addEventListener('mouseout', () => {
    card3.style.transform = 'scale(1.0)';
    effect3('r');
})              