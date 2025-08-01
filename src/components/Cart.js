import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItemList from "./CartItemList";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="w-10/12 md:w-8/12 lg:w-6/12 mx-auto">
        {cartItems.map((item) => (
          <CartItemList key={item?.id} itemData={item} />
        ))}
        <div className="text-center">
          {cartItems.length == 0 ? (
            <div className="my-32">
            <h2 className="text-2xl my-3">Your plate is empty!</h2>
            <p className="text-xl text-neutral-600 my-3">Start adding your favorite dishes and satisfy that hunger.</p>
            <Link to="/">
              <button className="bg-orange-500 text-white py-2 px-4 rounded-lg cursor-pointer">Browse Restaurants</button>
            </Link>
            </div>
          ) : (
            <button
              onClick={clearCartItems}
              className="bg-black text-white p-2 rounded-lg my-3 cursor-pointer"
            >
              Clear Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
