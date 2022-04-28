import '../styles/globals.css';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import styled from 'styled-components';

import Nav from '../src/global/Nav';
import Container from '@mui/material/Container';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<CssBaseline></CssBaseline>
			<Header>
				<Container maxWidth="lg">
					<Nav></Nav>
				</Container>
			</Header>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

const Header = styled.header`
	padding-bottom: 10px;
`;
