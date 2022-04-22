import '../styles/globals.css';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<CssBaseline></CssBaseline>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
