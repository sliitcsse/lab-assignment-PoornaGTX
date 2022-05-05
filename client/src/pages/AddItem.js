import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddItem = () => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemQty, setItemQty] = useState("");
  const [itemPromo, setItemPromo] = useState("promotion unavailabe");

  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(itemName, itemPrice, itemQty);

    const addItems = {
      name: itemName,
      price: itemPrice,
      qty: itemQty,
      promo: itemPromo,
      id: new Date().getTime(),
    };

    //add data to backend array
    try {
      const addItemAdmin = await axios.post("/add", addItems);
    } catch (error) {
      console.log(error);
    }
    navigator("/traderHome");
  };

  return (
    <div>
      <h1 className="Heading">Add Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="price">price</label>
          <input
            type="text"
            name="itemPrice"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input
            type="text"
            name="itemQty"
            value={itemQty}
            onChange={(e) => setItemQty(e.target.value)}
          />
        </div>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddItem;
