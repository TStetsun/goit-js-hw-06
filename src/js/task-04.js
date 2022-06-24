const counterValue = document.querySelector('#value');
console.log(counterValue);

const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');
plusBtn.addEventListener('click', () => {
counterValue.textContent ++;    
});
minusBtn.addEventListener('click', () => {
    counterValue.textContent --;
});