import styled from "styled-components";

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
	width: 486px;
	background-color: ${({ theme }) => theme.background.blue};
`;

export default function Cart({ closeCart }: CartProps) {
	return (
		<CartContainer>
			<h1>Cart</h1>
			<div onClick={closeCart}>Close</div>
		</CartContainer>
	);
}
