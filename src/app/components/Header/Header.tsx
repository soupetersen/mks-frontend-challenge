"use client";

import { CartButton } from "../CartButton/CartButton";
import { MKSText, PageHeader, Subtitle, TitleContainer } from "./HeaderStyle";

export default function Header() {
	return (
		<PageHeader>
			<TitleContainer>
				<MKSText>MKS</MKSText>
				<Subtitle>Sistemas</Subtitle>
			</TitleContainer>
			<CartButton />
		</PageHeader>
	);
}
