$(document).ready(() => {
    let submitted = false;
    let emailAlert = document.createElement('p');
    let subjectAlert = document.createElement('p');
    let nameAlert = document.createElement('p');

    function validateName() {
        var name = document.getElementById('jmeno').value;

        if (!name.match(/^(?:\b[A-Ž]+\b[\s\r\n]*){2,4}$/)) {
            nameAlert.classList.remove('hide-alert');
            nameAlert.classList.add('alert-name');
            nameAlert.innerText = 'Prosím zadejte platné jméno a příjmení (max 4 slova)';
            var nameInput = document.querySelector('.pole');
            nameInput.appendChild(nameAlert);
            emailAlert.classList.add('hide-alert');
            subjectAlert.classList.add('hide-alert');
            return false;
        }

        nameAlert.classList.remove('alert-name');
        nameAlert.classList.add('hide-alert');
        return true;
    }

    function validateMessage() {
        /*var message = document.getElementById('zprava').value;

        if (!message.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
            alert("Prosím používejte jen písmena ve zprávě"); //Validation Message
            return false;
        }*/

        return true;

    }

    function validateEmail() {

        var email = document.getElementById('email').value;

        if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            emailAlert.classList.remove('hide-alert');
            emailAlert.classList.add('alert-email');
            emailAlert.innerText = 'Prosím zadejte platný email';
            var emailInput = document.querySelector('.pole');
            emailInput.appendChild(emailAlert);
            subjectAlert.classList.add('hide-alert');
            return false;

        }

        emailAlert.classList.remove('alert-email');
        emailAlert.classList.add('hide-alert');
        return true;

    }

    function validateSubject() {
        var subject = document.getElementById('predmet').value;

        if (!subject.match(/^(?:\b[A-Ž]+\b[\s\r\n]*){0,5}$/)) {
            subjectAlert.classList.remove('hide-alert');
            subjectAlert.classList.add('alert-subject');
            subjectAlert.innerText = 'Předmět může mít max 5 slov';
            var subjectInput = document.querySelector('.pole');
            subjectInput.appendChild(subjectAlert);
            return false;
        }

        subjectAlert.classList.remove('alert-subject');
        subjectAlert.classList.add('hide-alert');
        return true;
    }

    function validateForm() {
        if (!validateName() || !validateMessage() || !validateEmail() || !validateSubject()) {
            return false;
        } else {
            submitted = true;
            /*setTimeout(() => {
                const sentInfo = document.createElement('p');
                sentInfo.innerText = 'Děkujeme, Váš email byl odeslán'
                const form = document.querySelector('.formular');
                form.appendChild(sentInfo);
                setTimeout(() => {
                    form.removeChild(sentInfo);
                }, 3000);
                console.log(sentInfo.innerText);
            }, 2000);
            console.log(sentInfo.innerText);*/
            return true;
        }
    }
});