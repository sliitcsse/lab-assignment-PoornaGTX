import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddPromotion = () => {
  const { id, name, price, qty, promo } = useParams();
  const [itemName, setItemName] = useState(name);
  const [itemPromo, setItemPromo] = useState(promo);
  const [itemPrice, setItemPrice] = useState(price);
  const [itemQty, setItemQty] = useState(qty);

  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(itemName, itemPrice);

    const promodetails = {
      name: itemName,
      price: itemPrice,
      qty: itemQty,
      promo: itemPromo,
      id: id,
    };

    //update data in backend array
    try {
      const addPromoItem = await axios.put("/updateItem", promodetails);
    } catch (error) {
      console.log(error);
    }
    navigator("/traderHome");
  };

  return (
    <div>
      <h1 className="Heading">Add Promotion</h1>
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
          <label htmlFor="promo">Promotion</label>
          <input
            type="text"
            name="itemPromo"
            value={itemPromo}
            onChange={(e) => setItemPromo(e.target.value)}
          />
        </div>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPromotion;
