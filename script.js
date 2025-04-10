document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('scheduleForm');
  const message = document.getElementById('formMessage');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('input[name="name"]').value;
      const phone = form.querySelector('input[name="phone"]').value;
      const email = form.querySelector('input[name="email"]').value;
      const description = form.querySelector('textarea[name="description"]').value;

      if (!name || !phone || !email || !description) {
        message.textContent = 'Por favor, completa todos los campos.';
        message.classList.remove('hidden', 'text-green-600');
        message.classList.add('text-red-600');
        return;
      }

      message.textContent = 'Solicitud enviada con éxito. Te contactaremos pronto.';
      message.classList.remove('hidden', 'text-red-600');
      message.classList.add('text-green-600');
      form.reset();
    });
  }
});
