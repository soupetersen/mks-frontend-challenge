"use client";

import { useState } from "react";
import { Product } from "./Product";
import { SkeletonLoading } from "../Skeleton";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/app/services/getProducts";
import { Product as ProductType } from "@/app/schema/products";
import { ProductsContainer } from "./ProductsStyle";

export default function Products() {
	const [page, setPage] = useState(1);
	const [rows, setRows] = useState(10);
	const [sortBy, setSortBy] = useState("id");
	const [sortOrder, setSortOrder] = useState("DESC");

	const { data, error, isLoading } = useQuery<ProductType[], Error>({
		queryKey: ["products", page, rows, sortBy, sortOrder],
		queryFn: async () => getProducts(),
	});

	return (
		<ProductsContainer $isLoading={isLoading}>
			{isLoading && <SkeletonLoading />}
			{error && <div>Error: {error.message}</div>}
			{data && (
				<>
					{data.map((product) => (
						<Product
							data-testid="products-map"
							key={product.id}
							product={product}
						/>
					))}
				</>
			)}
		</ProductsContainer>
	);
}
