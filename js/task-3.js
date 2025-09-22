const inputName = document.querySelector('#name-input');
inputName.addEventListener('input', handleOutput);
const spanHello = document.querySelector('#name-output');
function handleOutput(event) {
    const outputName = event.target.value.trim();
    if (outputName === "") {
         spanHello.textContent = 'Anonymous';
    } else {
        spanHello.textContent = outputName;
        }
};