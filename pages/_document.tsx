/* eslint-disable @next/next/no-sync-scripts */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
					/>
					<script
						src="https://kit.fontawesome.com/2f64c83195.js"
						crossOrigin="anonymous"
					></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const sheet = new ServerStyleSheet();
	const materialSheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	try {
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) =>
					sheet.collectStyles(materialSheets.collect(<App {...props} />)),
			});

		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: [
				<React.Fragment key={'key'}>
					{initialProps.styles}
					{sheet.getStyleElement()}
				</React.Fragment>,
			],
		};
	} finally {
		sheet.seal();
	}
};
