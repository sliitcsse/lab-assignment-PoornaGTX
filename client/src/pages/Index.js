import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Index = () => {
  const [items, setItems] = useState([]);

  //get item details from backend array
  const getData = async () => {
    try {
      const response = await axios.get("/getData");
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="Heading">Welocme to My Super Market</h1>

      <button type="button" className="coloraddsubmit">
        <Link to="/createAccount">Create Profile</Link>
      </button>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Item</th>&nbsp;&nbsp;
            <th>Price</th>&nbsp;&nbsp;
            <th>Quantity</th>&nbsp;&nbsp;
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const { id, name, price, qty } = item;
            return (
              <tr key={id}>
                <td>{name}</td>&nbsp;&nbsp;
                <td>Rs.{price}</td>&nbsp;&nbsp;
                <td>{qty}</td>&nbsp;&nbsp;
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
