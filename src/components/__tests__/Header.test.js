import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("Should render Header Component with Login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button");
    expect(loginBtn).toBeInTheDocument();
});

it("Should render Header Component with a cart item", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    );

    const cartItem = screen.getByTestId("cartIcon");
    expect(cartItem).toBeInTheDocument();
});

it("Should change Login button to Logout onclick",() => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    );
    const loginBtn = screen.getByRole("button",{name: "Login"});
    fireEvent.click(loginBtn);
    const logOutBtn = screen.getByRole("button",{name: "Logout"});
    expect(logOutBtn).toBeInTheDocument();
})