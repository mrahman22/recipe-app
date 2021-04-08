import React from "react";
import {render, fireEvent} from "@testing-library/react";
import SearchForm from "../components/SearchForm";


it("renders correctly", () => {
    const {queryByTestId, queryByPlaceholderName} = render(<SearchForm />)
    expect(queryByTestId("search-btn")).toBeTruthy();
})