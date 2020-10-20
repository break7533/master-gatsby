import { useState } from 'react';

export default function usePizza({ pizzas, inputs }) {
  // 1. Create state to hold order
  const [order, setOrder] = useState([]);

  // 2. Make a function to add things to order
  function addToOrder(orderPizza) {
    setOrder([...order, orderPizza]);
  }

  // 3. Make a function to remove things from order
  function removeFromOrder(index) {
    setOrder([
      // everything before the item we want to remove
      ...order.slice(0, index),
      // everything after the item we want to remove
      ...order.slice(index + 1),
    ]);
  }

  // 4. Send this data to a serverless function for the checkout
  // TODO

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
