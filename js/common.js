// Actualiza contador en el navbar
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = count);
}

// Validación de formulario de contacto
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!name || !emailRegex.test(email) || !message) {
      e.preventDefault();
      alert('Por favor completa todos los campos correctamente.');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  setupContactForm();
});
