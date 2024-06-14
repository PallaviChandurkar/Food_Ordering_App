import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const onClearCart = () => {
        dispatch(clearCart());
    }

    //console.log(cartItems);

    return (
        <div className="">
            <h1 className="text-center text-2xl my-5">Cart</h1>
            <div className="">
            {cartItems.map((item) => <CartItem key={item.card.info.id} foodItem={item} />)}
            </div>
            <div className="flex justify-center">
                <button onClick={()=> onClearCart()} className="bg-gray-500 py-2 px-4 text-white rounded-lg">Clear Cart</button>
            </div>
        </div>
    )
}

export default Cart;