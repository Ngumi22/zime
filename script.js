const cartItemsContainer = document.getElementById('cart-items');
const totalElement = document.getElementById('cart-total');


const savedCart = localStorage.getItem('cart');
let cart = savedCart ? JSON.parse(savedCart) : [];


function renderCartItems() {
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.textContent = 'Your cart is empty';
        totalElement.textContent = 'Ksh 0.00';
    } else {
        let total = 0;

        cart.forEach((item, index) => {
            const { image, title, price, quantity } = item;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
          <img src="${image}" alt="${title}">
          <div class="cart-item-info">
            <h4>${title}</h4>
            <p>Price: Ksh ${price}</p>
            <p>Quantity: ${quantity}</p>
          </div>
          <div>
            <button type="button" onclick="removeFromCart(${index})" class="font-medium fw-bold text-danger">X</button>
          </div>
        `;

            cartItemsContainer.appendChild(cartItem);


            total += price * quantity;
        });


        totalElement.textContent = `Ksh ${total.toFixed(2)}`;
    }
}

// Function to remove an item from the cart
function removeFromCart(index) {
    // Remove the item at the specified index from the cart array
    cart.splice(index, 1);
    // Update the cart items and total price
    renderCartItems();
    // Update the cart storage
    updateCartStorage();
}

// Function to update the cart storage
function updateCartStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Call the renderCartItems function to display the cart items and total price
renderCartItems();