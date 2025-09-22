const form = document.querySelector('.login-form');
form.addEventListener('submit', formSubmit);
function formSubmit(event) {
    event.preventDefault();
    const formEventEl = event.target.elements;
    const email = formEventEl.email.value.trim();
    const password = formEventEl.password.value.trim();
    const inputs = form.querySelectorAll('input');
    const dataObj = {};
    if (password === '' || email === '') {
        alert('All form fields must be filled in');
    } else { 
        for (let input of inputs) { 
            const key = input.name;
            const value = input.value.trim();
            if (key) {
                dataObj[key] = value;
            }
        }
        console.log(dataObj);
        form.reset();
    }
}