import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
	html,
  body {
		padding: 0;
		margin: 0;
	}

	body {
		height: 100vh;
  	width: 100vw;
		background-color: ${theme.background.white};
	}

	* {
    box-sizing: border-box;
	}

	span {
    line-height: normal !important;
	}

	.skeleton {
		flex: 1;
		gap: 1rem;
		justify-content: flex-start;
	}
`;

export default GlobalStyles;
