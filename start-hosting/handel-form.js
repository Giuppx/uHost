const signupForm = document.getElementsByClassName('signup-form')[0];
const submit = document.getElementsByClassName('button')[0];

submit.addEventListener('click', checkInputs)

function checkInputs(e) {
    // previeni il submit
    e.preventDefault();

    for (const element of signupForm.elements) {
        if (element.tagName != 'BUTTON' && !element.checkValidity()) {
            element.classList.add('invalid-input');
        } else {
            element.classList.remove('invalid-input');
        }
    }
}
