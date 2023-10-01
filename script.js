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
                <div class="cart-element border-bottom py-2">
                    <div class="w-25 h-100 p-1 flex-shrink-0 overflow-hidden cart-elements rounded-md border border-gray-200">
                        <img src="${image}" alt="Product" class="img-fluid h-auto">
                    </div>

                    <div class="cart-elementss">
                        <a class="fw-bold cart-text">${title}</a>
                    </div>

                    <div class="qty-container">
                        <button class="qty-btn-minus btn-primary btn-rounded mr-1" type="button" onclick="decreaseQuantity(${index})"><i class="bi bi-dash"></i></button>
                        <input
                            id="quantity-${index}"
                            min="1"
                            name="quantity"
                            value="${quantity}"
                            type="text"
                            class="form-btn input-qty input-rounded"
                            readonly
                        >
                        <button class="qty-btn-plus btn-primary btn-rounded ml-1" type="button" onclick="increaseQuantity(${index})"><i class="bi bi-plus"></i></button>
                    </div>

                    <div class="cart-elements">
                        <p class="item-total cart-text" id="item-total-${index}">Ksh ${(price * quantity).toFixed(2)}</p>
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

function updatePrice(index) {
    const cartItem = cart[index];
    const itemTotalElement = document.getElementById(`item-total-${index}`);
    const unitPrice = cartItem.price;
    const quantity = cartItem.quantity;
    const itemTotal = unitPrice * quantity;

    itemTotalElement.textContent = `Ksh ${itemTotal.toFixed(2)}`;
}

function increaseQuantity(index) {
    const quantityInput = document.getElementById(`quantity-${index}`);
    const cartItem = cart[index];

    cartItem.quantity += 1;
    quantityInput.value = cartItem.quantity;

    updatePrice(index); // Update the price when increasing quantity

    updateCartStorage();
    updateTotalPrice();
}

function decreaseQuantity(index) {
    const quantityInput = document.getElementById(`quantity-${index}`);
    const cartItem = cart[index];

    if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        quantityInput.value = cartItem.quantity;

        updatePrice(index); // Update the price when decreasing quantity

        updateCartStorage();
        updateTotalPrice();
    }
}

function updateTotalPrice() {
    let total = 0;

    cart.forEach((item) => {
        total += item.price * item.quantity;
    });

    totalElement.textContent = `Ksh ${total.toFixed(2)}`;
}

function removeFromCart(index) {
    // Get the title of the item being removed
    const title = cart[index].title;

    // Show a confirmation dialog with the item's title
    const confirmRemove = confirm(`Are you sure you want to remove ${title} from the cart?`);

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
