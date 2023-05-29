import { render, screen, fireEvent } from "@testing-library/react";
import UserRegisteration from "./UserRegisteration";

describe("UserRegisteration Component Test", () => {
  test("display error messages for invalid fields", () => {
    // ARRANGE
    render(<UserRegisteration />);
    const nameInput = screen.getByLabelText("Name");
    const passwordInput = screen.getByLabelText("Password");
    const emailInput = screen.getByLabelText("Email");
    const submitButton = screen.getByText("Register");

    // ACT
    fireEvent.change(nameInput, { target: { value: "Jo" } });
    fireEvent.change(passwordInput, { target: { value: "ABC4" } });
    fireEvent.change(emailInput, { target: { value: "john.com" } });
    fireEvent.click(submitButton);

    // ASSERT
    expect(
      screen.getByText("Invalid Input name should be minimum 3 characters")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Invalid Input password should be minimum 6 characters")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Invalid input enter valid email")
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Registeration Successful")
    ).not.toBeInTheDocument();
  });

  test("display success message and clear form on successful submission", () => {
    // ARRANGE
    render(<UserRegisteration />);
    const nameInput = screen.getByLabelText("Name");
    const passwordInput = screen.getByLabelText("Password");
    const emailInput = screen.getByLabelText("Email");
    const submitButton = screen.getByText("Register");

    // ACT
    fireEvent.change(nameInput, { target: { value: "John" } });
    fireEvent.change(passwordInput, { target: { value: "ABC123" } });
    fireEvent.change(emailInput, { target: { value: "john@sky.com" } });
    fireEvent.click(submitButton);

    // ASSERT
    expect(screen.getByText("Registeration Successful")).toBeInTheDocument();
    expect(nameInput.value).toBe("");
    expect(passwordInput.value).toBe("");
    expect(emailInput.value).toBe("");
  });

  test("diable submit button until all fields are filled", () => {
    render(<UserRegisteration />);
    const nameInput = screen.getByLabelText("Name");
    const passwordInput = screen.getByLabelText("Password");
    const emailInput = screen.getByLabelText("Email");
    const submitButton = screen.getByText("Register");

    expect(submitButton).toBeDisabled();

    fireEvent.change(nameInput, { target: { value: "John" } });
    fireEvent.change(emailInput, { target: { value: "john@sky.com" } });
    expect(submitButton).toBeDisabled();

    fireEvent.change(passwordInput, { target: { value: "ABC123" } });
    expect(submitButton).not.toBeDisabled();
  });
});
