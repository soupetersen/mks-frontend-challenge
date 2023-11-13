import { createContext, ReactNode, useState } from "react";
import { Product, ProductCart } from "../schema/products";

interface CartContextData {
	cartItems: ProductCart[];
	cartTotal: number;
	addToCart: (product: Product) => void;
	removeCartItem: (productId: number) => void;
	addCartAmount: (productId: number) => void;
	removeCartAmount: (productId: number) => void;
	checkIfItemAlreadyExists: (productId: number) => boolean;
}

interface CartContextProviderProps {
	children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [cartItems, setCartItems] = useState<ProductCart[]>([]);

	const cartTotal: number = cartItems.reduce((acc, product) => {
		return acc + Number(product.price) * product.amount;
	}, 0);

	function addToCart(product: Product) {
		if (checkIfItemAlreadyExists(product.id)) {
			addCartAmount(product.id);
			return;
		}

		const cart = {
			...product,
			amount: 1,
		};
		setCartItems((state) => [...state, cart]);
	}

	function addCartAmount(id: number) {
		const product = cartItems.find((item) => item.id === id);

		if (!product) {
			return;
		}

		product.amount++;

		setCartItems((prev) => [...prev]);
	}

	function removeCartAmount(id: number) {
		const product = cartItems.find((item) => item.id === id);

		if (!product) {
			return;
		}

		product.amount--;

		if (product.amount === 0) {
			removeCartItem(id);
			return;
		}

		setCartItems((prev) => [...prev]);
	}

	function removeCartItem(productId: number) {
		setCartItems((state) => state.filter((item) => item.id !== productId));
	}

	function checkIfItemAlreadyExists(productId: number) {
		return cartItems.some((product) => product.id === productId);
	}

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeCartItem,
				cartTotal,
				addCartAmount,
				removeCartAmount,
				checkIfItemAlreadyExists,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
