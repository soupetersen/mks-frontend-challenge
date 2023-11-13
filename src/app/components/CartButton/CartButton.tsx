import { useCart } from "@/app/hooks/useCart";
import Image from "next/image";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { Button, CartAmount } from "./CartButtonStyle";

export const CartButton = () => {
	const [cartOpened, setCartOpened] = useState(false);

	const { cartItems } = useCart();

	function handleCloseCart(event: React.MouseEvent<HTMLElement>) {
		event.stopPropagation();
		setCartOpened((prev) => !prev);
	}

	return (
		<Button onClick={() => setCartOpened(true)} data-testid="cart-button">
			<Image src="./cart-icon.svg" alt="cart" width={19} height={18} />
			<CartAmount>{cartItems?.length ?? 0}</CartAmount>
			{cartOpened && <Cart closeCart={handleCloseCart} />}
		</Button>
	);
};
