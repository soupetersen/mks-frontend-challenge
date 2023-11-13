import styled from "styled-components";

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	border: 1px solid #bfbfbf;
	padding: 0.2rem;
	width: 97px;
	height: 34px;

	@media only screen and (min-width: 768px) {
		height: 20px;
		width: 50px;
		font-size: 1.5rem;
	}
`;

export const Signal = styled.div<{ $borderPosition: "Left" | "Right" }>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	/* height: 100%; */
	cursor: pointer;

	span {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.5rem;
		font-weight: 400;
		width: 100%;
		${(props) =>
			props.$borderPosition === "Left"
				? "border-left: 1px solid #bfbfbf;"
				: "border-right: 1px solid #bfbfbf;"}

		@media only screen and (min-width: 768px) {
			font-size: 0.625rem;
			width: 15px;
		}
	}
`;

export const Amount = styled.span`
	display: flex;
	justify-content: center;
	width: 100%;
	font-size: 1.25rem;

	@media only screen and (min-width: 768px) {
		font-size: 0.5rem;
	}
`;
