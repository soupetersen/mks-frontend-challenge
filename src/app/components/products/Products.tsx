"use client";

import { Product as ProductType } from "@/app/schema/products";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import styled from "styled-components";
import { Product } from "./Product";
import { SkeletonLoading } from "../Skeleton";

const ProductsContainer = styled.div<{ $isLoading: boolean }>`
	display: flex;
	flex-wrap: wrap;
	margin: 0;
	width: 938px;
	gap: 1rem;
	height: ${(props) => (props.$isLoading ? "400px" : "601px")};
	justify-content: center;
`;

export default function Products() {
	const [page, setPage] = useState(1);
	const [rows, setRows] = useState(10);
	const [sortBy, setSortBy] = useState("id");
	const [sortOrder, setSortOrder] = useState("DESC");

	const { data, error, isLoading } = useQuery<ProductType[], Error>({
		queryKey: ["products", page, rows, sortBy, sortOrder],
		queryFn: async () => {
			const res = await fetch(
				`/api/products?page=${page}&rows=${rows}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
			);
			const data = await res.json();
			return data;
		},
	});

	return (
		<ProductsContainer $isLoading={isLoading}>
			{isLoading && <SkeletonLoading />}
			{error && <div>Error: {error.message}</div>}
			{data && (
				<>
					{data.map((product) => (
						<Product key={product.id} product={product} />
					))}
				</>
			)}
		</ProductsContainer>
	);
}
