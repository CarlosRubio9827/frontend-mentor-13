const form = document.querySelector('#form-data');
form.addEventListener('submit', event => {
    event.preventDefault();
    const email = document.querySelector("#email");
    emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if(emailRegex.test(email.value)){
        form.submit();
    }else{
        const messagge = document.querySelector('.container-notify-alert');
        const inputBorder = document.querySelector('.container-notify-input');
        messagge.style.display = 'block';
        inputBorder.classList.add('container-notify-input--error')
    }
    
})