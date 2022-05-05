import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateItem = () => {
  const { id, name, price, qty, promo } = useParams();
  const [itemName, setItemName] = useState(name);
  const [itemPrice, setItemPrice] = useState(price);
  const [itemQty, setItemQty] = useState(qty);
  const [itemPromo, setItemPromo] = useState(promo);
  const [itemId, setItemId] = useState(id);

  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(itemName, itemPrice);

    const updateItemDetail = {
      id: itemId,
      name: itemName,
      price: itemPrice,
      qty: itemQty,
      promo: itemPromo,
    };

    try {
      const updateItem = await axios.put("/updateItem", updateItemDetail);
      navigator("/traderHome");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="Heading">Update Item</h1>
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
          <label htmlFor="price">Quantity</label>
          <input
            type="text"
            name="iitemQty"
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

export default UpdateItem;
