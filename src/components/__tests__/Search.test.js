import Body from "../Body";
import { fireEvent, render,screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";

global.fetch=jest.fn(()=>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
);

test("Should render the Body Component with search", async()=>{
    await act(async() => 
         render(
            <BrowserRouter>
            <Body />
            </BrowserRouter>
        )
    );
    const searchBtn = screen.getByRole("button",{name: "Search"});

    expect(searchBtn).toBeInTheDocument();
})

test("Should search ResList for partcular Restaurant search input",async()=>{
    await act(async() => 
        render(
           <BrowserRouter>
            <Body />
            </BrowserRouter>
        )
    );
    const cardsBeforeSearch = screen.getAllByTestId("resCards");

    expect(cardsBeforeSearch.length).toBe(10);

    const searchBtn = screen.getByRole("button",{name: "Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput,{target: {value: "Haldiram's Restaurant"}});

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCards");

    expect(cardsAfterSearch.length).toBe(1);
})

test("Should filter top rated Restaurants", async()=>{
    await act(async()=>
          render (
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            )
    );
    const resBtn = screen.getByRole("button",{name: "Top Rated Restaurants"});

    expect(resBtn).toBeInTheDocument();

    fireEvent.click(resBtn);

    const cards = screen.getAllByTestId("resCards");

    expect(cards.length).toBe(4);
})