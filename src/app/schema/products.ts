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

export type Product = schema.infer<typeof ProductSchema>;
