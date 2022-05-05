import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TraderIndex = () => {
  const [adminItem, setAdminItem] = useState([]);

  const getAddminItems = async () => {
    try {
      const response = await axios.get("/getData");
      setAdminItem(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAddminItems();
  }, []);

  const navigator = useNavigate();

  const removeItem = async (item) => {
    try {
      const removeItem = await axios.delete("/delete", { data: item });
      setAdminItem(removeItem.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateItem = async (id, name, price, qty, promo) => {
    try {
      navigator(`/ItemUpdate/${id}/${name}/${price}/${qty}/${promo}`);
    } catch (error) {
      console.log(error);
    }
  };

  const itemPromotion = async (id, name, price, qty, promo) => {
    try {
      navigator(`/addPromo/${id}/${name}/${price}/${qty}/${promo}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="Heading">Trader Home</h1>
      <button type="button" className="coloradd">
        <Link to="/users">Users</Link>
      </button>
      &nbsp;
      <button type="button" className="coloradd">
        <Link to="/AddItem">Add Item</Link>
      </button>
      &nbsp;
      <button type="button" className="coloradd">
        <Link to="/inventory">View Inventory</Link>
      </button>
      &nbsp;
      <button type="button" className="coloradd">
        <Link to="/">Logout</Link>
      </button>
      <br />
      <br />
      <br />
      <h2 className="Heading">Items</h2>
      {adminItem.map((item) => {
        const { id, name, price, qty, promo } = item;
        return (
          <div key={id}>
            <h3>Name:{name}</h3>
            <h3>Price:Rs.{price}</h3>
            <h3>Quantity:{qty}</h3>
            <h3>Promotions:{promo}</h3>
            <button onClick={() => removeItem(item)}>Remove</button> &nbsp;
            <button onClick={() => updateItem(id, name, price, qty, promo)}>
              Update
            </button>{" "}
            &nbsp;
            <button onClick={() => itemPromotion(id, name, price, qty, promo)}>
              Add Promotion
            </button>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default TraderIndex;
