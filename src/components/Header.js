import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../utils/userContext";

const Header = () => {

    const [btn,setBtn] = useState("Login");

    const cartItems = useSelector((store) => store.cart.items);

    const { loggedInUser } = useContext(UserContext);

    return (
        <div className="border-b-2 border-neutral-300 py-4">
        <div className="w-10/12 flex justify-between items-center mx-auto">
            <div className="flex gap-3 items-center">
                <Link to="/"><img className="w-16 rounded-full border-2 border-orange-200" src={LOGO_URL} /></Link>
                <p className="text-lg">Food Application</p>
            </div>
            <div>
                <ul className="flex gap-1 sm:gap-5 text-lg">
                    <Link to="/"><li className="hidden sm:block">Home</li></Link>
                    <Link to="/about"><li className="hidden sm:block">About</li></Link>
                    {/* <Link to="/grocery"><li>Grocery</li></Link> */}
                    <Link to="/contact"><li className="hidden sm:block">Contact</li></Link>
                    {/* <Link to="/cart"><li>Cart {cartItems.length}</li></Link> */}
                    <Link to="/cart">
                        <div className="relative block w-fit ml-auto mr-4" data-testid="cartIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-cart-dash" viewBox="0 0 16 16">
                            <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"/>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                            </svg>
                            <div className="absolute -top-2 -right-2 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center shadow">{cartItems.length}</div>
                        </div>
                    </Link>
                    {/* <Link to="/"><li>{loggedInUser}</li></Link> */}
                    <button onClick={()=>{btn=="Login" ? setBtn("Logout") : setBtn("Login")}} className="bg-black text-white py-1 px-3 rounded-lg cursor-pointer hidden sm:block">{btn}</button>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Header;