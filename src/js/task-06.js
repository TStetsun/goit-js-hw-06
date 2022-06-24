const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', (event) => {
    const symbolCount = Number(inputRef.dataset["length"]);
    if (inputRef.value.length === symbolCount) {
        inputRef.classList.add("valid");
    }
    else {
        inputRef.classList.add("invalid");
    }
})