import { ProductCart } from "@/app/schema/products";
import Image from "next/image";
import styled from "styled-components";
import { Input } from "../Input/Input";
import { XCircle } from "@phosphor-icons/react";
import { useCart } from "@/app/hooks/useCart";

interface CartProductProps {
	product: ProductCart;
}

const CartProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	/* width: 250px; */
	height: 100%;
	max-height: 230px;
	align-items: center;
	padding: 1.1rem 1.4rem;
	gap: 0.75rem;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.background.white};

	@media only screen and (min-width: 768px) {
		flex-direction: row;
		width: 100%;
		height: 95px;
	}
`;

const LeftBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0;

	> img {
		width: 100%;
		height: 95px;
		object-fit: contain;
	}

	@media only screen and (min-width: 768px) {
		flex-direction: row;
		gap: 1.3rem;

		> img {
			height: 61px;
		}
	}
`;

const RightBox = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: space-between;

	@media only screen and (min-width: 768px) {
		align-items: center;
	}
`;

const ProductName = styled.h1`
	display: flex;
	justify-content: center;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.1rem;
	letter-spacing: 0px;
	text-align: left;
	width: 100%;
	text-align: left;
	color: ${({ theme }) => theme.colors.gray};

	@media only screen and (min-width: 768px) {
		width: 130px;
		font-size: 0.8rem;
		font-weight: 400;
		line-height: 1rem;
		letter-spacing: 0px;
		justify-content: flex-start;
	}
`;

const InputAmoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

const Price = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #373737;
	width: 84px;
	height: 34.81px;
	border-radius: 5px;
	color: #ffffff;
	font-size: 0.875rem;
	font-weight: 700;
	line-height: 1rem;

	@media only screen and (min-width: 768px) {
		font-size: 0.93rem;
		font-weight: 700;
		line-height: 0.93rem;
		text-align: left;
		background-color: transparent;
		justify-content: flex-end;
		color: ${({ theme }) => theme.colors.black};
	}
`;

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
