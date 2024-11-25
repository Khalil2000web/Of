function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;
  
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price}`;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.onclick = () => {
        cart.splice(index, 1);
        saveCart();
        renderCart();
      };
      li.appendChild(removeBtn);
      cartItems.appendChild(li);
      total += item.price;
    });
  
    cartTotal.textContent = total.toFixed(2);
  }
  
  function checkout() {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
  
    let message = 'Order Details:\n';
    let total = 0;
  
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - $${item.price}\n`;
      total += item.price;
    });
  
    message += `\nTotal: $${total.toFixed(2)}`;
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/${9720509207030}?text=${encodedMessage}`;
  }
  
  // Render the cart when the cart page loads
  renderCart();