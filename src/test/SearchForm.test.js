import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

it("renders correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<SearchForm />);
  expect(queryByTestId("search-btn")).toBeTruthy();
  expect(
    queryByPlaceholderText("type in your main ingredient.......")
  ).toBeTruthy();
});

describe("Input value", () => {
  it("updates on change", () => {
    const { queryByPlaceholderText } = render(<SearchForm />);
    const searchInput = queryByPlaceholderText(
      "type in your main ingredient......."
    );
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
});
