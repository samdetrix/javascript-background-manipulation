
const hexColors=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn = document.querySelector('.btn');
const hexColor= document.querySelector('.hex');
const body= document.querySelector('body');

btn.addEventListener('click', changeBcg);

function changeBcg(){
    let hexNum= '#';
    for(let i=0; i<6;i++){
        let random= Math.floor(Math.random()*hexColors.length);
        hexNum+=hexColors[random];
        body.style.backgroundColor=hexNum;
        hexColor.innerHTML=hexNum;
        
    }
}