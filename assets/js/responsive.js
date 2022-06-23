let img=document.querySelector('img');
let btn1=document.querySelector('#btn1');
let btn2=document.querySelector('#btn2');
let btn3=document.querySelector('#btn3');

btn1.addEventListener('click',()=>{
    img.src='assets/images/alexrobot.jpg';
})
btn2.addEventListener('click',()=>{
    img.src='assets/images/medical.jpg';
})
btn3.addEventListener('click',()=>{
    img.src='assets/images/vr.jpg';
})
