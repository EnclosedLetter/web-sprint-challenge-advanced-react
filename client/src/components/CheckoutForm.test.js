import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => { 
//Arrange 
const { getByText } = render(<CheckoutForm />);
// Act
const headerRender = getByText(/Checkout Form/i);
// Assert
expect(headerRender).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
//Arrange
const { getByText, getByTestId } = render(<CheckoutForm />);
const button = getByTestId(/checkoutID/i)
fireEvent.click(button)
// Act
const successMessage = getByText(/You have ordered some plants! Woo-hoo!/i);
// Assert
expect(successMessage).toBeVisible();
});
