"use client";

import styled from "styled-components";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const HomeContainer = styled.main`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: baseline;
	width: 100%;
	height: calc(100% - 135px); //header = 101px + 34px footer
	overflow-y: auto;
	padding: 1rem 0;

	@media only screen and (min-width: 768px) {
		/* For everything bigger than 768px */
		height: 100%;
		align-items: center;
		padding: 0;
	}
`;

export default function Home() {
	return (
		<HomeContainer>
			<Header />
			<Container>
				<Products />
			</Container>
			<Footer />
		</HomeContainer>
	);
}
