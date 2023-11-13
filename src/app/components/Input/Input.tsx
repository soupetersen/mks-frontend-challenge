import { useCart } from "@/app/hooks/useCart";
import { ProductCart } from "@/app/schema/products";
import { Amount, InputContainer, Signal } from "./InputStyle";

interface InputProps {
	product: ProductCart;
}

export const Input = ({ product }: InputProps) => {
	const { addCartAmount, removeCartAmount } = useCart();

	return (
		<InputContainer>
			<Signal
				onClick={() => removeCartAmount(product.id)}
				$borderPosition="Right"
			>
				<span>-</span>
			</Signal>
			<Amount>{product.amount}</Amount>
			<Signal onClick={() => addCartAmount(product.id)} $borderPosition="Left">
				<span>+</span>
			</Signal>
		</InputContainer>
	);
};
