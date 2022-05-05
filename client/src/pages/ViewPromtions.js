import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewPromtions = () => {
  const [itemName, setItemName] = useState([]);

  const getCart = async () => {
    try {
      const response = await axios.get("/getData");
      setItemName(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCart();
  }, []);

  return (
    <div>
      <h1 className="Heading">Promotions</h1>
      <table>
        <thead>
          <tr>
            <th>Item Name</th> &nbsp; &nbsp;
            <th>Item Promotion</th>
          </tr>
        </thead>
        <tbody>
          {itemName.map((item) => {
            const { cid, name, price, qty, promo } = item;
            return (
              <tr key={cid}>
                <td>{name}</td> &nbsp; &nbsp;
                <td>{promo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewPromtions;
