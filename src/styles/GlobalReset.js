import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalReset = createGlobalStyle`
    ${reset};
    *{
		box-sizing: border-box;
	}
	:root{
		font-size: 10px;
	}
    div, span, 
    h1, h2, h3, h4, h5, h6, p,
    a, em, img, strong, dl, dt, dd, ol, ul, li, form, label,
    table, thead, tr, th, td,
    article, aside, footer, header, nav, section {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, footer, header, nav, section {
        display: block;
    }
    a{
		text-decoration: none;
		color: inherit;
	}
	button {
		border: 0;
		padding: 0;
		background: transparent;
		font-family: inherit;
		cursor: pointer;
	}
    ol, ul {
        list-style: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    img{
		width: 100%;
		vertical-align: middle;
	}
	svg{
		vertical-align: middle;
	}
	input{
		background: unset;
		border: unset;	
		font: inherit;
	}
	textarea {
		border: none;
		overflow: auto;
		outline: none;
		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		box-shadow: none;
		resize: none;
		font: inherit;
	}
	.a11y {
		clip: rect(1px, 1px, 1px, 1px);
		clip-path: inset(50%);
		width: 1px;
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
	}
    
`;

export default GlobalReset;
