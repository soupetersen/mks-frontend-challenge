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
		overflow: hidden;
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

		/* width */
	::-webkit-scrollbar {
		width: 5px;
		border-radius: 4px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: transparent;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #888;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}

	@media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait){
  body {
    height: 1024px;
  }
}

/**
 * iPad with landscape orientation.
 */
@media all and (device-width: 768px) and (device-height: 1024px) and (orientation:landscape){
  body {
    height: 768px;
  }
}

/**
 * iPhone 5
 * You can also target devices with aspect ratio.
 */
@media screen and (device-aspect-ratio: 40/71) {
  body {
    height: 500px;
  }
}
`;

export default GlobalStyles;
