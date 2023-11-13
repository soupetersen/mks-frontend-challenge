import {
	act,
	fireEvent,
	render,
	screen,
	waitFor,
} from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Products from "../components/Products/Products";
import theme from "../styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Product } from "../schema/products";

import "@testing-library/jest-dom";
import { useCart } from "../hooks/useCart";
import { CartContextData } from "../contexts/CartContext";

export const productData: Product = {
	id: 1,
	name: "Product 1",
	brand: "Brand 1",
	price: "100",
	photo: "https://example.com/product1.jpg",
	description: "Product 1 description",
	createdAt: "2021-01-01 00:00:00",
	updatedAt: "2021-01-01 00:00:00",
};

jest.mock("../hooks/useCart");
const mockUseCart = useCart as jest.MockedFunction<typeof useCart>;
const mockedFetch = jest.fn();

beforeEach(() => {
	global.fetch = mockedFetch as jest.MockedFunction<typeof fetch>;
});

const renderComponent = () => {
	const queryClient = new QueryClient();
	render(
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<Products />
			</ThemeProvider>
		</QueryClientProvider>,
	);
};

describe("Products", () => {
	beforeEach(async () => {
		const mockAddToCart = jest.fn();

		mockUseCart.mockReturnValue({
			cartItems: [],
			cartTotal: 0,
			addToCart: mockAddToCart,
			removeCartItem: jest.fn(),
			addCartAmount: jest.fn(),
			removeCartAmount: jest.fn(),
			checkIfItemAlreadyExists: jest.fn(),
		} as CartContextData);

		mockedFetch.mockResolvedValueOnce({
			json: async () => [productData],
		} as Response);
	});
	it("Should render", async () => {
		renderComponent();
	});

	it("Should list products", async () => {
		await act(async () => {
			renderComponent();
		});

		await waitFor(() => {
			expect(screen.getByText("Product 1")).toBeInTheDocument();
		});
	});

	it("should add product to cart", async () => {
		await act(async () => {
			renderComponent();
		});

		await waitFor(() => {
			expect(screen.getByText("Product 1")).toBeInTheDocument();
		});

		const button = screen.getByText("COMPRAR");

		fireEvent.click(button);

		expect(mockUseCart().addToCart).toHaveBeenCalledWith(productData);
	});
});
