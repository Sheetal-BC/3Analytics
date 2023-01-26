import { render, screen } from "@testing-library/react";
import Login from "./Login";

  test("renders placeholder text", () => {
    render(<Login/>);
    const placeHolderElement = screen.getByPlaceholderText(/enter username/i);
    expect(placeHolderElement).toBeInTheDocument();
  });

  test("renders login text", () => {
    render(<Login/>);
    const loginElement = screen.getByTestId("login-1");
    expect(loginElement).toBeInTheDocument();
    expect(loginElement).toHaveTextContent(/login/i)
  });
