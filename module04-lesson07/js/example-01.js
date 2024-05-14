/* 
Example 1 - Function callback

Write the following functions:

  - createProduct(obj, callback) - accepts a product object without an id, and also callback. The function creates a product object by adding a unique identifier to it in property id and calls the callback passing it the created object.
  - logProduct(product) - callback accepting a product object and logging it to console
  - logTotalPrice(product) - callback receiving product object and logging the total value of the item in the console
*/
function createProduct(obj, callback) {
  const productId = generateUniqueId();
  const productWithId = {...obj, id: productId};
  callback(productWithId);
}

function logProduct(product) {
  console.log(product);
}

function logTotalPrice(product) {
  const totalPrice = product.price * product.quantity;
  console.log(`Total price of ${product.name}: $${totalPrice}`);
}

function generateUniqueId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

const product = {
  name: 'Laptop',
  price: 999,
  quantity: 2
};

createProduct(product, logProduct);
createProduct(product, logTotalPrice);