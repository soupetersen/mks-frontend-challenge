"use client";

import styled from "styled-components";
import Products from "./components/products/Products";
import Header from "./components/Header/Header";

const HomeContainer = styled.main`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

const Main = styled.main`
	display: flex;
	justify-content: center;
	align-items: baseline;
	width: 100%;
	height: calc(100% - 8rem);
	overflow-y: auto;
	padding: 1rem 0;

	@media only screen and (min-width: 768px) {
		/* For everything bigger than 768px */
		align-items: center;
		padding: 0;
		height: 100%;
	}
`;

export default function Home() {
	return (
		<HomeContainer>
			<Header />
			<Main>
				<Products />
			</Main>
		</HomeContainer>
	);
}
