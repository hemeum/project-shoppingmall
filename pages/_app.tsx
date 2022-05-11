import '../styles/globals.css';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';

import Nav from '../src/global/Nav';
import Container from '@mui/material/Container';
import Footer from '../src/global/Footer';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<CssBaseline></CssBaseline>
			<header>
				<Container maxWidth="lg">
					<Nav></Nav>
				</Container>
			</header>
			<Component {...pageProps} />
			<footer>
				<Footer></Footer>
			</footer>
		</>
	);
}

export default MyApp;
