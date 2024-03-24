let slider = document.querySelector('#slider');
let arr = ['Text1','text2','TEXT3'];
let ar1 = document.querySelector('#ar1');
let ar2 = document.querySelector('#ar2');
let i = 0;
slider.textContent = arr[0];
if ( i == 0){
    slider.textContent = arr[0];
}
console.log(i);
ar1.addEventListener('click',()=>{
i--;
slider.textContent = arr[i];
if (i < 0){
    i=2;
    slider.textContent = arr[i];
}
if (i > arr.length){
    i=0;
}
console.log(i);
})
ar2.addEventListener('click',()=>{
i++;
slider.textContent = arr[i];   
if (i == arr.length){
    i=0;
    slider.textContent = arr[i];
}
console.log(i);
})
