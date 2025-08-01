import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {

    // beforeAll(()=>{
    //     console.log("Before All");
    // })

    // beforeEach(()=>{
    //     console.log("Before Each");
    // })

    // afterAll(()=>{
    //     console.log("After All");
    // })

    // afterEach(()=>{
    //     console.log("After Each");
    // })

    test("Should load button inside contact component", () => {
        render(<Contact />);
        const btn = screen.getByRole("button");
        expect(btn).toBeInTheDocument();
    })

    test("Should load input name in contact component", () => {
        render(<Contact />);
        const name = screen.getByPlaceholderText("Enter your name");
        expect(name).toBeInTheDocument();
    })

    test("Should load number of input boxes inside contact component", () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
    })
})