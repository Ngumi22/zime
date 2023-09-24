// Logic for managing the cart data
class CartManager {
    constructor() {
        this.cart = [];
        this.loadCart();
    }

    loadCart() {
        const savedCart = localStorage.getItem('cart');
        this.cart = savedCart ? JSON.parse(savedCart) : [];
    }

    updateCartStorage() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    addToCart(item) {
        this.cart.push(item);
        this.updateCartStorage();
    }

    removeFromCart(index) {
        this.cart.splice(index, 1);
        this.updateCartStorage();
    }

    increaseQuantity(index) {
        const cartItem = this.cart[index];
        cartItem.quantity += 1;
        this.updateCartStorage();
    }

    decreaseQuantity(index) {
        const cartItem = this.cart[index];
        if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
            this.updateCartStorage();
        }
    }
}

// Logic for rendering the cart in the DOM
class CartRenderer {
    constructor(cartManager, cartItemsContainer, totalElement) {
        this.cartManager = cartManager;
        this.cartItemsContainer = cartItemsContainer;
        this.totalElement = totalElement;
    }

    renderCartItems() {
        this.cartItemsContainer.innerHTML = '';

        if (this.cartManager.cart.length === 0) {
            this.cartItemsContainer.textContent = 'Your cart is empty';
            this.totalElement.textContent = 'Ksh 0.00';
        } else {
            let total = 0;

            this.cartManager.cart.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                // ... (DOM creation code)

                this.cartItemsContainer.appendChild(cartItem);

                total += item.price * item.quantity;
            });

            this.totalElement.textContent = `Ksh ${total.toFixed(2)}`;
        }
    }

    updatePrice(index) {
        const cartItem = this.cartManager.cart[index];
        // ... (update price logic)
    }
}

// Example usage:
const cartItemsContainer = document.getElementById('cart-items');
const totalElement = document.getElementById('cart-total');

const cartManager = new CartManager();
const cartRenderer = new CartRenderer(cartManager, cartItemsContainer, totalElement);

cartRenderer.renderCartItems(); // Initial rendering
