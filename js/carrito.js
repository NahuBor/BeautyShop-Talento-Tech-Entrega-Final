document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('cart-items')) return;
  renderCart();
  document.getElementById('empty-cart').addEventListener('click', () => {
    localStorage.removeItem('cart');
    renderCart();
    updateCartCount();
  });
  document.getElementById('checkout').addEventListener('click', () => {
    localStorage.removeItem('cart');
    updateCartCount();
    window.location.href = 'index.html';
  });
});

function renderCart() {
  const container = document.getElementById('cart-items');
  container.innerHTML = '';
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  if (cart.length === 0) {
    container.innerHTML = '<p>El carrito está vacío.</p>';
    document.getElementById('cart-total').textContent = '0.00';
    return;
  }
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-card';
    div.innerHTML = `
      <span>${item.title} x ${item.qty}</span>
      <span>$${(item.price * item.qty).toFixed(2)}</span>
      <button data-id="${item.id}">Eliminar</button>`;
    container.appendChild(div);
    div.querySelector('button').addEventListener('click', () => {
      removeFromCart(item.id);
      renderCart();
      updateCartCount();
    });
  });
  updateTotal();
}

function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateTotal() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  document.getElementById('cart-total').textContent = total.toFixed(2);
}
