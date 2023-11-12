import { Product as ProductData } from "@/app/schema/products";
import Image from "next/image";
import styled from "styled-components";

interface ProductProps {
	product: ProductData;
}

const ProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 218px;
	height: 285px;
	background-color: ${({ theme }) => theme.colors.primary};
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

	&:hover {
		transform: scale(1.05);
	}
`;

const DetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding: 0 0.875rem;
`;

const TitleContainer = styled.div<{ textSize: number }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.5rem;
	height: 60px;

	> div {
		max-width: 64px;
		border-radius: 5px;
		background-color: #373737;
		padding: 4px;

		> span {
			font-size: ${({ textSize }) => (textSize > 4 ? "0.75rem" : "0.875rem")};
			font-weight: 700;
			line-height: 15px;
			letter-spacing: 0px;
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`;

const ProductTitle = styled.h1`
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.188rem;
	color: "#2C2C2C";
`;

const ProductDescription = styled.div`
	display: flex;
	line-height: 0.75rem;
	overflow: hidden;
	padding-top: 10px;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;

	span {
		font-weight: 300;
		font-size: 0.625rem;
		line-height: 0.75rem;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
`;

const AddCartButton = styled.button`
	all: unset;
	outline: none;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.375rem;
	width: 100%;
	padding: 0.438rem 0;
	background-color: ${({ theme }) => theme.background.blue};
	border-radius: 0px 0px 8px 8px;
	cursor: pointer;

	span {
		font-weight: 600;
		font-size: 0.875rem;
		line-height: 1.125rem;
		color: ${({ theme }) => theme.colors.primary};
	}
`;

export const Product = ({ product }: ProductProps) => {
	return (
		<ProductContainer>
			<div>
				<Image
					src={product.photo}
					alt={product.name}
					width={100}
					height={138}
					style={{ width: "100%", objectFit: "contain", paddingTop: "0.5rem" }}
				/>
			</div>
			<DetailsContainer>
				<TitleContainer textSize={Number(product.price).toFixed(0).length}>
					<ProductTitle>{product.name}</ProductTitle>
					<div>
						<span>R${Number(product.price).toFixed(0)}</span>
					</div>
				</TitleContainer>
				<ProductDescription>
					<span>{product.description}</span>
				</ProductDescription>
			</DetailsContainer>
			<AddCartButton>
				<Image src="./shopping-bag.svg" alt="cart" width={19} height={18} />
				<span>COMPRAR</span>
			</AddCartButton>
		</ProductContainer>
	);
};
