import { z as schema } from "zod";

export const ProductSchema = schema.object({
	id: schema.number(),
	name: schema.string(),
	brand: schema.string(),
	description: schema.string(),
	photo: schema.string(),
	price: schema.string(),
	createdAt: schema.string(),
	updatedAt: schema.string(),
});

export const ProductCartSchema = schema.object({
	id: schema.number(),
	name: schema.string(),
	brand: schema.string(),
	description: schema.string(),
	photo: schema.string(),
	price: schema.string(),
	amount: schema.number(),
});

export type Product = schema.infer<typeof ProductSchema>;
export type ProductCart = schema.infer<typeof ProductCartSchema>;
