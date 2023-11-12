import { HttpNotFoundError } from "@/app/error/errors";
import { ProductSchema } from "@/app/schema/products";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);

	const page = searchParams.get('page') || 1;
	const rows = searchParams.get('rows') || 5;
	const sortBy = searchParams.get('sortBy') || "id";
	const sortOrder = searchParams.get('sortOrder') || "DESC";

	try {
		const res = await fetch(
			`${process.env.API_URL}/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${sortOrder}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			},
		)

		const data = await res.json();
		const products = data.products;

		const body = ProductSchema.array().safeParse(products);

		if (!body.success) {
			return NextResponse.json(
				{ error: body.error },
				{ status: 400 },
			);
		}

		return NextResponse.json(products, { status: 200 });

	} catch (error) {
		if (error instanceof HttpNotFoundError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status },
      );
    }
    return NextResponse.json({ error: error }, { status: 404 });
	}
}
