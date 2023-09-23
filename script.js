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
                <div class="cart-element">
                    <div class="w-25 h-100 p-1 flex-shrink-0 overflow-hidden cart-elements rounded-md border border-gray-200">
                        <img src="${image}" alt="Product" class="img-fluid h-auto">
                    </div>

                    <div class="cart-elements">
                        <a class="fw-bold cart-text">${title}</a>
                    </div>

                    <div class="cart-elements d-block">
                        <h2>Quantity:</h2>
                        <p class="cart-text d-flex">
                            <input id="quantity-${index}"
                                min="1"
                                name="quantity"
                                value="${quantity}"
                                type="number"
                                class="form-btn"
                                onchange="updateQuantity(this, ${index}, this.value)">
                        </p>
                    </div>

                    <div class="cart-elements">
                        <p class="unit-price cart-text">Ksh ${price}.00</p>
                    </div>

                    <div class="cart-elements">
                        <button type="button" onclick="removeFromCart(${index})" class="font-medium fw-bold text-danger">X</button>
                    </div>
                </div>

            `;

            cartItemsContainer.appendChild(cartItem);

            total += price * quantity;
        });

        totalElement.textContent = `Ksh ${total.toFixed(2)}`;
    }
}

function updateQuantity(inputElement, index, newQuantity) {
    const cartItem = cart[index];

    // Update the quantity of the cart item
    cartItem.quantity = parseInt(newQuantity);

    // Calculate the new total price for the item
    cartItem.totalPrice = cartItem.quantity * cartItem.price;

    // Update the cart storage
    updateCartStorage();

    // Update the total price for all items in the cart
    updateTotalPrice();

    // Additionally, you can update the unit price if needed
    const unitPriceElement = inputElement.closest('.cart-item').querySelector('.unit-price');
    unitPriceElement.textContent = `Ksh ${cartItem.price * cartItem.quantity}.00`;
}


function updateTotalPrice() {
    let total = 0;

    cart.forEach((item) => {
        total += item.totalPrice;
    });

    totalElement.textContent = `Ksh ${total.toFixed(2)}`;
}

function removeFromCart(index) {
    // Show a confirmation dialog
    const confirmRemove = confirm('Are you sure you want to remove this item from the cart?');

    // If the user clicks "OK" in the confirmation dialog, remove the item
    if (confirmRemove) {
        // Remove the item at the specified index from the cart array
        cart.splice(index, 1);
        // Update the cart items and total price
        renderCartItems();
        // Update the cart storage
        updateCartStorage();
    }
}

function updateCartStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

renderCartItems();
