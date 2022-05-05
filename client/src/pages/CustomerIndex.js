import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CustomerIndex = () => {
  const [items, setItems] = useState([]);

  //get customer item details from backend array
  const getData = async () => {
    const response = await axios.get("/getData");
    setItems(response.data);
  };
  useEffect(() => {
    getData();
  }, []);

  //add customer selected item to cart
  const addItemToCart = async (item) => {
    try {
      const addCart = await axios.post("/CustomerCart", item);
    } catch (error) {
      console.log(error);
    }
  };

  //add customer selected item to wish list
  const addItemToWishList = async (item) => {
    try {
      const addCart = await axios.post("/CustomerWishList", item);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="Heading">Customer Home</h1>
      <button type="button" className="coloradd">
        <Link to="/myCart">My Cart</Link>
      </button>
      &nbsp;
      <button type="button" className="coloradd">
        <Link to="/myWishList">My Wish List</Link>
      </button>
      &nbsp;
      <button type="button" className="coloradd">
        <Link to="/">Logout</Link>
      </button>
      {items.map((item) => {
        const { id, name, price, qty, promo } = item;
        return (
          <div key={id}>
            <h3>Name:{name}</h3>
            <h3>Price:Rs.{price}</h3>
            <h3>Quantity:{qty}</h3>
            <h3>Promotions:{promo}</h3>
            <button onClick={() => addItemToCart(item)}>Add To Cart</button>
            &nbsp;
            <button onClick={() => addItemToWishList(item)}>
              Add To Wish List
            </button>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default CustomerIndex;
