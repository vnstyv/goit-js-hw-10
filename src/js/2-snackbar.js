import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const snackbarForm = document.querySelector(".form");
const snackbarBtn = document.querySelector("button");

snackbarForm.addEventListener('submit', event => {
    event.preventDefault();
    const delay = snackbarForm.elements.delay.value;
    const selectedValue = snackbarForm.elements.state.value;
    event.target.reset();
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (selectedValue === "fulfilled") {
                resolve(`✅ Fulfilled promise in ${delay}ms`);
            } else {
                reject(`❌ Rejected promise in ${delay}ms`);
            }
        }, delay);
    });

    promise
        .then(value => {
            iziToast.success({
                position: 'topRight',
                message: `${value}`,
            });
        })
        .catch(error => {
            iziToast.error({
                position: 'topRight',
                message: `${error}`,
            });
        });
});