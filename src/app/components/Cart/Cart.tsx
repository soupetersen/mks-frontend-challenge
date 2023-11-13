import { useCart } from "@/app/hooks/useCart";
import { CartProduct } from "./CartProduct";
import {
	CartContainer,
	CartItems,
	CartTitle,
	Checkout,
	CloseButton,
	TitleContainer,
	TotalContainer,
} from "./CartStyle";

interface CartProps {
	closeCart: (event: React.MouseEvent<HTMLElement>) => void;
}

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
				{cartItems?.map((product) => (
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
