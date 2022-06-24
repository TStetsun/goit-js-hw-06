const formRef = document.querySelector('form.login-form');
const user = {};

formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    if (formRef.email.value === "" || formRef.password.value === "") {
        return alert("Please fill all fields!!!");
    }
    user.email = formRef.email.value;
    user.password = formRef.password.value;
    console.log(user);
    formRef.reset();
})