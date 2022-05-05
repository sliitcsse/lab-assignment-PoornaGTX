import React, { useState, useEffect } from "react";
import axios from "axios";

const Inventory = () => {
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

  return (
    <div>
      <h1 className="Heading">Inventory</h1>
      <table>
        <thead>
          <tr>
            <th>Item Name</th> &nbsp; &nbsp;
            <th>Quantity</th> &nbsp; &nbsp;
          </tr>
        </thead>
        <tbody>
          {adminItem.map((item) => {
            const { id, name, qty } = item;
            return (
              <tr key={id}>
                <td>{name}</td> &nbsp; &nbsp;
                <td>{qty}</td> &nbsp; &nbsp;
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
