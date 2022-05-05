import React, { useEffect, useState } from "react";
import axios from "axios";

const CustomerWishList = () => {
  const [wishListtItems, setWishListtItems] = useState([]);

  //get customer wish list details from backend array
  const getWishList = async () => {
    try {
      const response = await axios.get("/getWishList");
      setWishListtItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWishList();
  }, []);

  //event listener for clear list item
  const clearWishList = async () => {
    try {
      const removeItem = await axios.delete("/deleteWishList");
      setWishListtItems([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="Heading">My Wish List</h1>
      {wishListtItems.map((item) => {
        const { wid, name, price } = item;
        return (
          <div key={wid}>
            <ul>
              <li>Name : {name} </li>
              <li>Price : Rs.{price} </li>
            </ul>
          </div>
        );
      })}
      <button onClick={() => clearWishList()}>Clear List</button>
    </div>
  );
};

export default CustomerWishList;
