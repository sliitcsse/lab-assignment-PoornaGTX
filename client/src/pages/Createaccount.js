import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("Trader");
  const [buttonEnable, setButtonEnable] = useState(false);

  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(name, email, phone, type);

    //check user submit values
    if (name && email && phone) {
      setButtonEnable(true);
      const user = { name, email, phone, type };

      //inser new user to backend array
      try {
        const addUser = await axios.post("/createUser", user);
      } catch (error) {
        console.log(error);
      }

      //navigate user with user type
      if (type === "Customer") {
        setTimeout(() => {
          navigator("/customerHome");
        }, 1000);
      } else {
        setTimeout(() => {
          navigator("/traderHome");
        }, 1000);
      }
    } else {
      console.log("emty values");
    }
  };

  //event handler from drop down
  const handleAccount = (e) => {
    const { value } = e.target;
    setType(value);
  };

  return (
    <div>
      <h1 className="Heading">Create Account</h1>
      <br />

      <form onSubmit={handleSubmit}>
        <h3>Enter Your Details</h3>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <br />
        <label htmlFor="type">Choose a type:</label>
        <select name="type" value={type} onChange={handleAccount}>
          <option value="Trader">Trader</option>
          <option value="Customer">Customer</option>
        </select>
        <br /> <br />
        <button type="submit" disabled={buttonEnable}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
