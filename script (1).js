// Demonstra a validação sem transmitir nem persistir os dados digitados.
const form = document.querySelector('.contact-form');
const status = document.querySelector('#form-status');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = 'Demonstração concluída. Nenhuma mensagem foi enviada ou armazenada.';
    form.reset();
});
