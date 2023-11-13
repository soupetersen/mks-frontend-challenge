import { ProductCart } from "@/app/schema/products";
import Image from "next/image";
import { Input } from "../Input/Input";
import { XCircle } from "@phosphor-icons/react";
import { useCart } from "@/app/hooks/useCart";
import {
	CartProductContainer,
	InputAmoutContainer,
	LeftBox,
	Price,
	ProductName,
	RightBox,
} from "./CartProductStyle";

interface CartProductProps {
	product: ProductCart;
}

export const CartProduct = ({ product }: CartProductProps) => {
	const { removeCartItem } = useCart();

	function removeCartProduct(id: number) {
		removeCartItem(id);
	}
	return (
		<CartProductContainer>
			<LeftBox>
				<Image src={product.photo} alt={product.name} width={50} height={61} />
				<ProductName>{product.name}</ProductName>
			</LeftBox>
			<RightBox>
				<InputAmoutContainer>
					<Input product={product} />
				</InputAmoutContainer>
				<Price>R${Number(product.price) * product.amount}</Price>
			</RightBox>
			<XCircle
				size={21}
				color="black"
				weight="fill"
				style={{ position: "absolute", top: -8, right: -8 }}
				onClick={() => removeCartProduct(product.id)}
			/>
		</CartProductContainer>
	);
};
