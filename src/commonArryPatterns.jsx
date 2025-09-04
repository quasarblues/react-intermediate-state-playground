import { useState } from "react";

const myCart = [
    { id: 1, product: "Apple", price: 1.25 },
    { id: 2, product: "Banana", price: 0.75 },
    { id: 3, product: "Orange", price: 1.50 }
];

const [cartItems, setCartItems] = useState(myCart);

// ADDING TO AN ARRAY
const addtoCart = (item) => {
    setCartItems(prevCart => [...prevCart, { id: item.id, product: item.product, price: item.price }]);
};

// REMOVE ELEMENT
const removeFromCart = (id) => {
    setCartItems(prevCart => (
        prevCart.filter(i => i.id !== id)
    ));
};

// update ALL elemtns in an array

setCartItems(prevCart => (
    prevCart.map(item => (
        {
            ...item,
            price: item.price * 1.50
        }
    ))
))

// modify PARITCULAR item in an array

setCartItems(prevCart => (
    prevCart.map(item => {
        if (item.id === 1) {
            return { ...item, price: 4.00 }
        } else {
            return item;
        }
    })
));
