const inRef = document.querySelector('#name-input');
const outRef = document.querySelector('#name-output');
inRef.addEventListener('input', (event)=> {
    outRef.textContent = event.currentTarget.value || 'Anonymous';
})