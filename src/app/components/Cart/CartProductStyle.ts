import styled from "styled-components";

export const CartProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	height: 100%;
	max-height: 230px;
	align-items: center;
	padding: 1.1rem 1.4rem;
	gap: 0.75rem;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.background.white};

	@media only screen and (min-width: 768px) {
		flex-direction: row;
		width: 100%;
		height: 95px;
	}
`;

export const LeftBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0;

	> img {
		width: 100%;
		height: 95px;
		object-fit: contain;
	}

	@media only screen and (min-width: 768px) {
		flex-direction: row;
		gap: 1.3rem;

		> img {
			height: 61px;
		}
	}
`;

export const RightBox = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: space-between;

	@media only screen and (min-width: 768px) {
		align-items: center;
	}
`;

export const ProductName = styled.h1`
	display: flex;
	justify-content: center;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.1rem;
	letter-spacing: 0px;
	text-align: left;
	width: 100%;
	text-align: left;
	color: ${({ theme }) => theme.colors.gray};

	@media only screen and (min-width: 768px) {
		width: 130px;
		font-size: 0.8rem;
		font-weight: 400;
		line-height: 1rem;
		letter-spacing: 0px;
		justify-content: flex-start;
	}
`;

export const InputAmoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export const Price = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #373737;
	width: 84px;
	height: 34.81px;
	border-radius: 5px;
	color: #ffffff;
	font-size: 0.875rem;
	font-weight: 700;
	line-height: 1rem;

	@media only screen and (min-width: 768px) {
		font-size: 0.93rem;
		font-weight: 700;
		line-height: 0.93rem;
		text-align: left;
		background-color: transparent;
		justify-content: flex-end;
		color: ${({ theme }) => theme.colors.black};
	}
`;
