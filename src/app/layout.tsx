import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Providers } from "./providers";

const montserrat = Montserrat({ subsets: ["latin"], style: "normal" });

export const metadata: Metadata = {
	title: "Loja",
	description: "Loja de produtos",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
