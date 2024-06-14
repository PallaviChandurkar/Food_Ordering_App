import { useState } from "react";
import Delicious from "./images/Delicious.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between px-5 shadow-lg">
      <div className="res-logo">
        <img className="w-20" alt="food-logo" src={Delicious} />
      </div>
      <div className="">
        <ul className="flex">
          <li className="m-2 p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2 p-2">
            <Link to="/about">About</Link>
          </li>
          <li className="m-2 p-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="m-2 p-2">
            <Link to="/cart">Cart - ({cartItems.length})</Link>
          </li>
          <li className="m-2 p-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="m-2 p-2">{onlineStatus === true ? <p>Online</p> : <p>Offline</p>}</li>
          <button
            className="btn"
            onClick={() => {
              btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
            }}
          >
            {btnText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
