import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("Should render Restaurant Card Component with props data",()=>{
    render(
        <BrowserRouter>
            <RestaurantCard resData={MOCK_DATA} />
        </BrowserRouter>
    );
    const name = screen.getByText("Dabba Garam (Homestyle,Combo, Thali & More)");
    expect(name).toBeInTheDocument();
});