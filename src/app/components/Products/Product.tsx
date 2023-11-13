import { useCart } from "@/app/hooks/useCart";
import { Product as ProductData } from "@/app/schema/products";
import Image from "next/image";
import {
	AddCartButton,
	DetailsContainer,
	ProductContainer,
	ProductDescription,
	ProductTitle,
	TitleContainer,
} from "./ProductStyle";

interface ProductProps {
	product: ProductData;
}

export const Product = ({ product }: ProductProps) => {
	const { addToCart } = useCart();

	function handleAddToCart(_product: ProductData) {
		addToCart(_product);
	}

	return (
		<ProductContainer>
			<div style={{ width: "100%" }}>
				<Image
					src={product.photo}
					alt={product.name}
					priority={true}
					width={100}
					height={138}
					style={{ width: "100%", objectFit: "contain", paddingTop: "0.5rem" }}
				/>
			</div>
			<DetailsContainer>
				<TitleContainer $textSize={Number(product.price).toFixed(0).length}>
					<ProductTitle>{product.name}</ProductTitle>
					<div>
						<span>R${Number(product.price).toFixed(0)}</span>
					</div>
				</TitleContainer>
				<ProductDescription>
					<span>{product.description}</span>
				</ProductDescription>
			</DetailsContainer>
			<AddCartButton onClick={() => handleAddToCart(product)}>
				<Image src="./shopping-bag.svg" alt="cart" width={19} height={18} />
				<span>COMPRAR</span>
			</AddCartButton>
		</ProductContainer>
	);
};
