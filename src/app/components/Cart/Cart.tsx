import { useCart } from "@/app/hooks/useCart";
import styled from "styled-components";
import { CartProduct } from "./CartProduct";

interface CartProps {
	closeCart: (event: React.MouseEvent<HTMLElement>) => void;
}

const CartContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 320px;
	background-color: ${({ theme }) => theme.background.blue};

	@media only screen and (min-width: 768px) {
		/* For everything bigger than 768px */
		width: 486px;
	}
`;

const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 1.5rem;

	@media only screen and (min-width: 768px) {
		padding: 2rem;
	}
`;

const CartTitle = styled.h1`
	font-weight: 700;
	font-size: 1.688rem;
	line-height: 2rem;
	text-align: left;
	color: ${({ theme }) => theme.colors.primary};
	width: 80%;

	@media only screen and (min-width: 768px) {
		width: 50%;
	}
`;

const CloseButton = styled.button`
	all: unset;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 46px;
	height: 46px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.black};
	cursor: pointer;

	@media only screen and (min-width: 768px) {
		/* For everything bigger than 768px */
		width: 38px;
		height: 38px;
	}

	span {
		font-size: 2rem;
		color: ${({ theme }) => theme.background.blue};

		@media only screen and (min-width: 768px) {
			color: ${({ theme }) => theme.colors.primary};
			font-size: 1.5rem;
			font-weight: 400;
			line-height: 0.9rem;
		}
	}
`;

const CartItems = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	gap: 1.375rem;
	margin-top: 1rem;
	overflow-y: auto;
	padding: 1rem 2rem;
`;

const TotalContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 0 2rem;

	> h1 {
		font-size: 1.75rem;
		font-weight: 700;
		letter-spacing: 0px;
		text-align: left;
		color: ${({ theme }) => theme.colors.primary};
	}
`;

const Checkout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 97px;
	cursor: pointer;
	background-color: ${({ theme }) => theme.colors.black};

	> h1 {
		font-size: 1.25rem;
		font-weight: 700;
		letter-spacing: 0px;
		text-align: left;
		color: ${({ theme }) => theme.colors.primary};

		@media only screen and (min-width: 768px) {
			font-size: 1.75rem;
		}
	}
`;

export default function Cart({ closeCart }: CartProps) {
	const { cartItems, cartTotal } = useCart();

	return (
		<CartContainer>
			<TitleContainer>
				<CartTitle>Carrinhos de compras</CartTitle>
				<CloseButton onClick={closeCart}>
					<span>X</span>
				</CloseButton>
			</TitleContainer>
			<CartItems>
				{cartItems.map((product) => (
					<CartProduct product={product} key={product.id} />
				))}
			</CartItems>
			<TotalContainer>
				<h1>Total:</h1>
				<h1>R${cartTotal}</h1>
			</TotalContainer>
			<Checkout>
				<h1>Finalizar Compra</h1>
			</Checkout>
		</CartContainer>
	);
}
