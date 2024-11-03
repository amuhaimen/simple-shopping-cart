const addProduct = () => {
  const productField = document.getElementById("product-field");
  const quantityField = document.getElementById("quantity-field");
  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = "";
  quantityField.value = "";

  saveProductToLocalStorage(product, quantity);
  displayProduct(product, quantity);
};

const displayProduct = (product, quantity) => {
  const itemsContainer = document.getElementById("item-container");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  itemsContainer.appendChild(li);
};

const getStoredShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorage = (product, quantity) => {
  const cart = getStoredShoppingCart();
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const displayProductFromLocalStorage = () => {
  const savedCart = getStoredShoppingCart();
  for (const product in savedCart) {
    const quantity = savedCart[product];
    displayProduct(product, quantity);
  }
};

const removeCart = () => {
  localStorage.removeItem("cart");
  const itemsContainer = document.getElementById("item-container");
  itemsContainer.innerHTML = "";
};

displayProductFromLocalStorage();
