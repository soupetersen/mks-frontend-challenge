import styled from "styled-components";

export const ProductsContainer = styled.div<{ $isLoading: boolean }>`
	display: flex;
	flex-wrap: wrap;
	margin: 0;
	width: 938px;
	gap: 1rem;
	height: ${(props) => (props.$isLoading ? "400px" : "601px")};
	justify-content: center;
`;
