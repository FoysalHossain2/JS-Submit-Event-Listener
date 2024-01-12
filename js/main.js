const form = document.querySelector("form");
const name = document.querySelector(" #name");
const email = document.querySelector(" #email");
const password = document.querySelector(" #password");
const submit = document.querySelector(" #submit");

form.addEventListener('submit' , function(e){
    e.preventDefault();

    const userinfo= {
        name: name.value,
        email: email.value,
        password: password.value,
    }

    console.log(userinfo);
    name.value = "";
    email.value = "";
    password.value = "";
})
