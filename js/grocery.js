// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
// document.addEventListener('DOMContentLoaded', () => {
//     fetchData();
// });

// const fetchData = async () => {
//     try {
//         const res = await fetch('api.json');
//         const data = await res.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// };

var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0,
        discount: 0
    },
    beauty: {
        value: 0,
        discount: 0
    },
    clothes: {
        value: 0,
        discount: 0
    },
};
var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    for (let i = 0; i < products.length; i++) {
        if (i === id - 1) {
            // 2. Add found product to the cartList array
            cartList.push(products[i]);
        }
    }
    // console.log(cartList);
}

// Exercise 2
function cleanCart() {
    cartList = [];
    cart = [];
    // console.log(cartList, cart);
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    for (let i = 0; i < cartList.length; i++) {
        switch (cartList[i].type) {
            case 'grocery':
                subtotal.grocery.value += cartList[i].price;
                if (cart[i].subtotalWithDiscount !== 0) {
                    subtotal.grocery.discount += (cart[i].subtotal - cart[i].subtotalWithDiscount);
                }
                break;
            case 'beauty':
                subtotal.beauty.value += cartList[i].price;
                if (cart[i].subtotalWithDiscount !== 0) {
                    subtotal.beauty.discount += (cart[i].subtotal - cart[i].subtotalWithDiscount);
                }
                break;
            case 'clothes':
                subtotal.clothes.value += cartList[i].price;
                if (cart[i].subtotalWithDiscount !== 0) {
                    subtotal.clothes.discount += (cart[i].subtotal - cart[i].subtotalWithDiscount);
                }
                break
            default:
                console.log('the cart is empty!');
        }
    }
}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
    for (let category in subtotal) {
        total += subtotal[category].value;
    }
    // console.log(total);
}

// Exercise 5
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart,
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    for (let i = 0; i < cartList.length; i++) {
        let index = cart.findIndex(product => {
            product.name === cartList[i].name;
        });
        if (index > -1) {
            cart[index].quantity += 1;
            cart[index].subtotal += cart[index].price;
        } else {
            let newItem = {
                name: cartList[i].name,
                price: cartList[i].price,
                type: cartList[i].type,
                quantity: 1,
                subtotal: cartList[i].price,
                subtotalWithDiscount: 0
            }
            cart.push(newItem);
        }
    }
    // console.log(cart);
}

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let cookingOilIndex = cart.findIndex(product => {
        product.name === 'cooking oil';
    });
    let instantCupcakeMixtureIndex = cart.findIndex(product => {
        product.name === 'Instant cupcake mixture';
    });
    if (instantCupcakeMixtureIndex > -1 && cart[cookingOilIndex].quantity >= 3) {
        cart[cookingOilIndex].subtotalWithDiscount = cart[cookingOilIndex].quantity * 10;
    }
    if (instantCupcakeMixtureIndex > -1 && cart[instantCupcakeMixtureIndex].quantity >= 10) {
        cart[instantCupcakeMixtureIndex].subtotalWithDiscount = cart[instantCupcakeMixtureIndex].subtotal * 2/3;
    }
    console.log(cart);
}

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    for (let i = 0; i < products.length; i++) {
        if (i === id - 1) {
            let index = cart.findIndex(product => {
            product.name === products[i].name;
            });
            if (index > -1) {
                cart[index].quantity += 1;
                cart[index].subtotal += cart[index].price;
            } else {
                let newProductItem = {
                    name: products[i].name,
                    price: products[i].price,
                    type: products[i].type,
                    quantity: 1,
                    subtotal: products[i].price,
                    subtotalWithDiscount: 0
                }
                cart.push(newProductItem);
            }
        }
    }
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
