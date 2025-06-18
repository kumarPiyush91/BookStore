document.addEventListener("DOMContentLoaded", function () {
    const selectedBook = JSON.parse(localStorage.getItem("selectedBook"));

    if (selectedBook) {
        document.getElementById("book-image").src = selectedBook.image;
        document.getElementById("book-title").textContent = selectedBook.title;
        document.getElementById("book-price").textContent = `Price: ${selectedBook.price}`;
        document.getElementById("book-description").textContent = selectedBook.description;
    }
});

function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const selectedBook = JSON.parse(localStorage.getItem("selectedBook"));
    if (selectedBook) {
        cart.push(selectedBook);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        alert("Book added to cart!");
    }
}

function buyNow() {
    addToCart();
    window.location.href = "checkout.html";
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").textContent = cart.length;
}

// Update cart count on page load
updateCartCount();
