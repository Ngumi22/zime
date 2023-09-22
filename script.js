const cartItems = document.getElementById("cart-items");
const total = document.getElementById("cart-total");
const checkoutButton = document.getElementById("checkout-button");
// Add event listener to checkout button
checkoutButton.addEventListener("click", () => {
    // Redirect to checkout page
    window.location.href = "cart.html";
});
