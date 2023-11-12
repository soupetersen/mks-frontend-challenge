import { createContext, ReactNode, useState } from "react";
import { Product } from "../schema/products";

interface CartContextData {
	cartItems: Product[];
	cartTotal: number;
	addToCart: (product: Product) => void;
	removeCartItem: (productId: number) => void;
	checkIfItemAlreadyExists: (productId: number) => boolean;
}

interface CartContextProviderProps {
	children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [cartItems, setCartItems] = useState<Product[]>([]);

	const cartTotal: number = cartItems.reduce(
		(total: number, product: Product) => {
			return total + Number(product.price);
		},
		0,
	);

	function addToCart(product: Product) {
		setCartItems((state) => [...state, product]);
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
				checkIfItemAlreadyExists,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
