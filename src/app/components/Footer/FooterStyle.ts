import styled from "styled-components";

export const FooterContainer = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.background.footer};
	color: ${({ theme }) => theme.colors.black};
	padding: 0.5rem 0;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 34px;
	z-index: 1;

	p {
		font-size: 0.75rem;
		font-weight: 400;
		line-height: 0.93rem;
	}
`;
