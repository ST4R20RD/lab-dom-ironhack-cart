// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  const subtotalValue = parseInt(quantity.value) * parseInt(price.innerHTML);
  subtotal.innerHTML = subtotalValue
  console.log(subtotal);
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const multipleProduct = document.querySelectorAll('.product');
  multipleProduct.forEach((singleProduct) => {
    updateSubtotal(singleProduct);
  })

  // ITERATION 3
  const subtotals = document.querySelectorAll('.subtotal span');
  const total = document.querySelector('#total-value span');
  const subtotalValues = Array.from(subtotals).map (subtotal => parseInt(subtotal.innerHTML));
  
  total.innerHTML = subtotalValues.reduce((accumulator, currentValue) => accumulator + currentValue);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
