const $toast = document.querySelector('#invalidInputToast');
const $toastBody = document.querySelector('#toastBody');

const invalidInputToast = new bootstrap.Toast($toast, {})

/**
 * @param {string} text
 */
function showToast(text)
{
    $toastBody.innerHTML = text;
    invalidInputToast.show();
}