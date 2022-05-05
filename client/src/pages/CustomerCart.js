import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [totalItem, setTotalItem] = useState(0);
  const [paymentStetus, setPaymentStetus] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get("/getCart");
      const array = response.data.map((item) => {
        return { ...item, qty: 0 };
      });
      setItems(array);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = (e, item) => {
    const { name, price, qty, id } = item;
    const cartItems = items.filter((item) => {
      if (item.id != id) {
        return item;
      }
    });
    const newItem = { name, price, qty: e.target.value, id };
    let newCart = [...cartItems, newItem];
    setItems(newCart);
  };

  const handleTotalPrice = () => {
    const value = items.reduce((sum, currentItem) => {
      return sum + currentItem.qty * currentItem.price;
    }, 0);
    setTotalItem(value);
    setPaymentStetus(true);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="Heading">My Cart</h1>
      <form>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          {items
            .sort((a, b) => (a.price > b.price ? 1 : -1))
            .map((item) => {
              const { name, price, qty, id } = item;
              return (
                <tr>
                  <td>{name}</td>
                  <td>{price}</td>
                  <input
                    type="text"
                    value={qty}
                    onChange={(e) => handleClick(e, item)}
                  />
                </tr>
              );
            })}
        </table>
        <br />
        <br />
        <button type="button" onClick={handleTotalPrice}>
          purchase
        </button>
      </form>
      <br />
      {paymentStetus
        ? `
        Your Total Bill: ${totalItem}
        `
        : ``}
    </div>
  );
};

export default Cart;
