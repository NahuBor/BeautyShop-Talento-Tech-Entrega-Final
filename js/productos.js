document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('productos-list')) return;
  fetch('https://dummyjson.com/products?limit=12')
    .then(res => res.json())
    .then(data => renderProductos(data.products))
    .catch(() => document.getElementById('productos-list').innerHTML = '<p>Error al cargar productos.</p>');
});

function renderProductos(products) {
  const container = document.getElementById('productos-list');
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.thumbnail}" alt="${p.title}">
      <div class="card-content">
        <h3>${p.title}</h3>
        <p>Precio: $${p.price}</p>
        <button data-id="${p.id}" data-title="${p.title}" data-price="${p.price}">
          Agregar al carrito
        </button>
      </div>`;
    container.appendChild(card);
    card.querySelector('button').addEventListener('click', () => {
      addToCart({ id: p.id, title: p.title, price: p.price });
    });
  });
}

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    product.qty = 1;
    cart.push(product);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert('Producto agregado al carrito');
}
