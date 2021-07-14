let emailAlert = document.createElement('p');
let nameAlert = document.createElement('p');
let success = document.createElement('p');

const button = document.querySelector('.button');
button.addEventListener('click', function(e) {
    e.preventDefault();

    function validateName() {
        const nameInput = document.querySelector('.name-input');
        const name = nameInput.value;

        if (!name.match(/^(?:\b[A-Ž]+\b[\s\r\n]*){2,4}$/)) {
            success.remove();
            nameAlert.classList.remove('hide-alert');
            nameAlert.classList.add('alert-name');
            nameAlert.innerText = 'Zadejte jméno a příjmení bez diaktitiky (max 4 slova)';
            button.after(nameAlert);
            return false;
        }

        nameAlert.classList.remove('alert-name');
        nameAlert.classList.add('hide-alert');
        return true;
    }

    function validateEmail() {
        const emailInput = document.querySelector('.email-input');
        const email = emailInput.value;

        if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            success.remove();
            emailAlert.classList.remove('hide-alert');
            emailAlert.classList.add('alert-email');
            emailAlert.innerText = 'Prosím zadejte platný email';
            button.after(emailAlert);
            return false;

        }

        emailAlert.classList.remove('alert-email');
        emailAlert.classList.add('hide-alert');
        return true;

    }

    if (validateName() && validateEmail()) {
        success.classList.remove('hide-success');
        success.classList.add('alert-success');
        success.innerText = 'Email byl úspěšně odeslán';
        button.after(success);
    };
});