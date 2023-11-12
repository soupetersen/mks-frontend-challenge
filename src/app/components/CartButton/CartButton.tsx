import { useCart } from "@/app/hooks/useCart";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import Cart from "../Cart/Cart";

const Button = styled.button`
	display: flex;
	align-items: center;
	gap: 1rem;
	width: 90px;
	padding: 0.75rem 1rem;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.primary};
	cursor: pointer;
`;

const CartAmount = styled.span`
	font-weight: 700;
	font-size: 1.125rem;
	color: ${({ theme }) => theme.colors.black};
	line-height: 1.37rem;
	font-family: "Montserrat", sans-serif;
`;

export const CartButton = () => {
	const [cartOpened, setCartOpened] = useState(false);

	const { cartTotal } = useCart();

	function handleCloseCart(event: React.MouseEvent<HTMLElement>) {
		event.stopPropagation();
		setCartOpened((prev) => !prev);
	}

	return (
		<Button onClick={() => setCartOpened(true)}>
			<Image src="./cart-icon.svg" alt="cart" width={19} height={18} />
			<CartAmount>{cartTotal}</CartAmount>
			{cartOpened && <Cart closeCart={handleCloseCart} />}
		</Button>
	);
};
