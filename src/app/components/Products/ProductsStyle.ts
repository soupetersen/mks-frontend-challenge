import styled from "styled-components";

export const ProductsContainer = styled.div<{ $isLoading: boolean }>`
	display: flex;
	flex-wrap: wrap;
	width: 938px;
	gap: 1rem;
	height: ${(props) => (props.$isLoading ? "400px" : "")};
	justify-content: center;
	align-items: center;
`;
