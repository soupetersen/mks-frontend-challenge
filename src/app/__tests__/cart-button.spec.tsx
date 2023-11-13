import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { CartButton } from "../components/CartButton/CartButton";
import theme from "../styles/theme";

describe("Cart-Button", () => {
	it("Should render", () => {
		render(
			<ThemeProvider theme={theme}>
				<CartButton />
			</ThemeProvider>,
		);

		expect(screen.getByText("0")).toBeInTheDocument();
	});
	it("Should open cart component when clicked", () => {
		render(
			<ThemeProvider theme={theme}>
				<CartButton />
			</ThemeProvider>,
		);

		const button = screen.getByTestId("cart-button");

		fireEvent.click(button);

		expect(screen.getByText("Carrinhos de compras")).toBeInTheDocument();
	});
});
