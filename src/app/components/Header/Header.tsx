"use client";

import styled from "styled-components";
import theme from "../../styles/theme";
import { CartButton } from "../CartButton/CartButton";

const PageHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 101px;
	padding: 1.75rem 4rem;
	background-color: ${theme.background.blue};
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TitleContainer = styled.div`
	display: flex;
	gap: 0.5rem;
`;

const MKSText = styled.h1`
	font-weight: 600;
	font-size: 2.5rem;
	line-height: 1.1rem;
	color: ${({ theme }) => theme.colors.primary};
`;

const Subtitle = styled.h2`
	font-weight: 300;
	font-size: 1.25rem;
	line-height: 1.1rem;
	margin-top: 1.9rem;
	color: ${({ theme }) => theme.colors.primary};
`;

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
