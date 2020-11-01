document.addEventListener('DOMContentLoaded', () => {
    function fields() {
        const [username, email, password, repeatPassword] = document.querySelectorAll('#form input');
        return [username, email, password, repeatPassword];
    }

    function success(el) {
        el.parentElement.className = 'form-control success';
        // el.nextElementSibling
    }

    function error(el) {
        el.parentElement.className = 'form-control error';
    }

    function validate(arry) {
        arry.forEach(el => {
            el.value.trim() !== '' ? success(el) : error(el);
        });
    }
    document.querySelector('#form').addEventListener('submit', (e) => {
        e.preventDefault();

        validate(fields());
        // console.log(fields());
    });
});