import { Product } from "../schema/products";

export const getProducts = async (
	page: number = 1,
	rows: number = 10,
	sortBy: string = "id",
	sortOrder: string = "DESC",
): Promise<Product[]> => {
	const res = await fetch(
		`/api/products?page=${page}&rows=${rows}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
	);

	const data = await res.json();

	return data;
}
