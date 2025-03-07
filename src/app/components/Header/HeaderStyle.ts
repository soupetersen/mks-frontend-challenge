import styled from "styled-components";

export const PageHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 101px;
	padding: 1.438rem;
	background-color: ${({ theme }) => theme.background.blue};
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

	@media only screen and (min-width: 768px) {
		/* For everything bigger than 768px */
		padding: 1.75rem 4rem;
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	gap: 0.5rem;
`;

export const MKSText = styled.h1`
	font-weight: 600;
	font-size: 2rem;
	line-height: 1.1rem;
	color: ${({ theme }) => theme.colors.primary};

	@media only screen and (min-width: 768px) {
		/* For everything bigger than 768px */
		font-size: 2.5rem;
	}
`;

export const Subtitle = styled.h2`
	font-weight: 300;
	font-size: 1rem;
	line-height: 1.1rem;
	margin-top: 1.9rem;
	color: ${({ theme }) => theme.colors.primary};

	@media only screen and (min-width: 768px) {
		/* For everything bigger than 768px */
		font-size: 1.25rem;
	}
`;
