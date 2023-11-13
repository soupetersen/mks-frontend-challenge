import { useCart } from "@/app/hooks/useCart";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import Cart from "../Cart/Cart";

const Button = styled.button`
	display: flex;
	align-items: center;
	gap: 0.7rem;
	width: 52px;
	padding: 0.5rem;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.primary};
	cursor: pointer;

	> img {
		width: 10px;
		height: 10px;
	}

	@media only screen and (min-width: 768px) {
		/* For everything bigger than 768px */
		padding: 0.75rem 1rem;
		width: 90px;
		gap: 1rem;

		> img {
			width: 19px;
			height: 18px;
		}
	}
`;

const CartAmount = styled.span`
	font-weight: 700;
	font-size: 0.75rem;
	color: ${({ theme }) => theme.colors.black};
	line-height: 1.37rem;
	font-family: "Montserrat", sans-serif;

	@media only screen and (min-width: 768px) {
		/* For everything bigger than 768px */
		font-size: 1.125rem;
	}
`;

export const CartButton = () => {
	const [cartOpened, setCartOpened] = useState(false);

	const { cartItems } = useCart();

	function handleCloseCart(event: React.MouseEvent<HTMLElement>) {
		event.stopPropagation();
		setCartOpened((prev) => !prev);
	}

	return (
		<Button onClick={() => setCartOpened(true)}>
			<Image src="./cart-icon.svg" alt="cart" width={19} height={18} />
			<CartAmount>{cartItems?.length ?? 0}</CartAmount>
			{cartOpened && <Cart closeCart={handleCloseCart} />}
		</Button>
	);
};
