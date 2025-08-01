import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render,screen } from "@testing-library/react";
import Mock_MENU_DATA from "../mocks/mockResMenu.json";
import { act } from "react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom"
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(Mock_MENU_DATA);
        }
    })
});

test("Should load Restaurant Menu Component", async()=>{
    await act(async() => 
        render (
            <Provider store={appStore}>
            <RestaurantMenu />
            </Provider>
        )
    );
    const accordianHeader = screen.getByText("All Jain");

    fireEvent.click(accordianHeader);

    const fooditems = screen.getAllByTestId("foodItems");

    expect(fooditems.length).toBe(6);
}) 

test("Should load length of cartitems in Header when the button is clicked",async()=>{
    await act(async()=>
        render(
            <BrowserRouter>
            <Provider store={appStore}>
            <Header />
            <RestaurantMenu /> 
            </Provider>
            </BrowserRouter>
        )
    );
    const accordianHeader = screen.getByText("All Jain");

    fireEvent.click(accordianHeader);

    const addbtns = screen.getAllByRole("button",{name: "ADD +"});

    expect(addbtns.length).toBe(6);

    fireEvent.click(addbtns[0]);

    const cartItem = screen.getAllByTestId("cartIcon");

    expect(cartItem.length).toBe(1);
});

test("Should load number of cart items in the Cart Component", async() => {
    await act(async()=>
        render (
            <BrowserRouter>
            <Provider store={appStore}>
            <RestaurantMenu />
            <Cart />
            </Provider>
            </BrowserRouter>
        )
    );
    const accordianHeader = screen.getByText("Party Special");

    fireEvent.click(accordianHeader);

    const addbtns = screen.getAllByRole("button",{name: "ADD +"});

    fireEvent.click(addbtns[0]);

    const item = screen.getAllByTestId("cartItemList");

    expect(item.length).toBe(2);
})

test("Should load Cart Component and delete 1 cart item",async () => {
    await act(async()=>
        render(
            <BrowserRouter>
            <Provider store={appStore}>
            <Cart />
            </Provider>
            </BrowserRouter>
        )
    );

    const deleteBtns = screen.getAllByRole("button",{name: "Remove from Cart"});

    fireEvent.click(deleteBtns[0]);

    const cartItem = screen.getAllByTestId("cartItemList");

    expect(cartItem.length).toBe(1);

})

test("Should load Cart Component and clear cart", async()=>{
    await act(async()=>
        render(
            <BrowserRouter>
            <Provider store={appStore}>
            <Cart />
            </Provider>
            </BrowserRouter>
        )
    );

    const clearCart = screen.getByRole("button",{name: "Clear Cart"});

    fireEvent.click(clearCart);

    const cartText = screen.getByText("Your plate is empty!")

    expect(cartText).toBeInTheDocument();
});