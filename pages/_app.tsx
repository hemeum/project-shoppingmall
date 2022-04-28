/* eslint-disable @next/next/no-sync-scripts */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';

import Nav from '../src/global/Nav';
import Container from '@mui/material/Container';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
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
			<CssBaseline></CssBaseline>
			<header>
				<Container maxWidth="lg">
					<Nav></Nav>
				</Container>
			</header>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
