import '../styles/globals.css';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';

import Nav from '../src/global/Nav';
import Container from '@mui/material/Container';

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
		</>
	);
}

export default MyApp;
