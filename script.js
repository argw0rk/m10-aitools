// JavaScript Document
let cart = [];
let totalPrice = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    totalPrice += itemPrice;
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; // Clear previous items

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - $${item.price}`;
        cartItemsDiv.appendChild(itemDiv);
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
    document.getElementById('cart-count').textContent = cart.length;
}

// Optional: Handle checkout action
document.getElementById('checkout').addEventListener('click', () => {
    alert('Checkout feature is not implemented yet.');
    // Implement checkout logic here (e.g., form submission, payment gateway)
});