const books = [
  {
    title: "Why You Should Smile When Life Hits You Hard",
    image: "images/why.jpg",
    price: "$2.99",
    description: " The Silent Power of Karma, Patience, and Pain",
    paypalLink: "https://www.paypal.com/ncp/payment/6V38PZMEUL7KQ",
  },

  {
    title: "Your Words Can Hurt, Your Words Can Heal",
    image: "images/word.jpeg",
    price: "$2.99",
    description: "The Karma of What You Speak Comes Back to You.",
    paypalLink: "https://www.paypal.com/ncp/payment/WKNGPG5ZRZVY2",
  },
  {
    title: "How to Have a 100% Successful Relationship",
    image: "images/how.jpeg",
    price: "$2.99",
    description: "Secrets to a fulfilling and long-lasting relationship.",
    paypalLink: "https://www.paypal.com/ncp/payment/KSHU5D458XSTS",
  },
  {
    title: "All-Time Notorious Criminals Around the World",
    image: "images/criminal.jpeg",
    price: "$2.99",
    description: "Explore the lives of the most infamous criminals in history.",
    paypalLink: "https://www.paypal.com/ncp/payment/H8R4SWJ225LT2",
  },
  {
    title: "Edible Alchemy",
    image: "images/edible.jpg",
    price: "$2.99",
    description: "101 cannabis-infused recipes to elevate your cooking.",
    paypalLink: "https://www.paypal.com/ncp/payment/H8R4SWJ225LT2",
  },
  {
    title: "101 Delicious Whiskey Recipes of All Time",
    image: "images/101.jpeg",
    price: "$2.99",
    description: "A collection of the best whiskey cocktail recipes ever.",
    paypalLink: "https://www.paypal.com/ncp/payment/KR97G8EJPZZD2",
  },

  {
    title: "Get a 6-Figure Salary Package @ Any Age, Without a Degree",
    image: "images/6.jpeg",
    price: "$2.99",
    description:
      "your ultimate guide to landing high-paying jobs by mastering smart skills.",
    paypalLink: "https://www.paypal.com/ncp/payment/MQYZE6S7DEZB8",
  },

  {
    title: "How to Become a Digital Nomad",
    image: "images/nomad.jpg",
    price: "$2.99",
    description: "Explore the World While Earning.",
    paypalLink: "https://www.paypal.com/ncp/payment/A5VGXRAPHDT3E",
  },
  {
    title: "How to Impress Her Without Uttering A Word",
    image: "images/impress.jpeg",
    price: "$2.99",
    description: "51 Silent Moves for Unspoken Attraction.",
    paypalLink: "https://www.paypal.com/ncp/payment/BV5QLTSCGG722",
  },

  {
    title: "How to Brainwash Anyone!",
    image: "images/brainwash.jpeg",
    price: "$2.99",
    description: "A powerful guide on psychological manipulation techniques.",
    paypalLink: "https://www.paypal.com/ncp/payment/6J5KFM4S93RYW",
  },
];

function createBookElement(book) {
  const bookElement = document.createElement("div");
  bookElement.classList.add("book");

  const imageElement = document.createElement("img");
  imageElement.src = book.image;
  imageElement.alt = book.title;

  const infoElement = document.createElement("div");
  infoElement.classList.add("book-info");

  const titleElement = document.createElement("h2");
  titleElement.classList.add("book-title");
  titleElement.textContent = book.title;

  const buyButton = document.createElement("a");
  buyButton.classList.add("buy-button");
  buyButton.textContent = "View Details";
  buyButton.href = "cart.html";
  buyButton.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.setItem("selectedBook", JSON.stringify(book));
    window.location.href = "cart.html";
  });

  infoElement.appendChild(titleElement);
  infoElement.appendChild(buyButton);

  bookElement.appendChild(imageElement);
  bookElement.appendChild(infoElement);

  return bookElement;
}

function populateBooks() {
  const bookContainer = document.getElementById("book-container");
  books.forEach((book) => {
    const bookElement = createBookElement(book);
    bookContainer.appendChild(bookElement);
  });
}

document.addEventListener("DOMContentLoaded", populateBooks);

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

document.addEventListener("DOMContentLoaded", updateCartCount);

