import type { NextPage } from 'next';
import styled from 'styled-components';

import Container from '@mui/material/Container';
import Nav from '../src/global/Nav';
import MainBanner from '../src/main/MainBanner';

const Home: NextPage = () => {
	return (
		<>
			<Header>
				<Container maxWidth="lg">
					<Nav></Nav>
				</Container>
			</Header>
			<Main>
				<MainBanner></MainBanner>
			</Main>
		</>
	);
};

export default Home;

const Header = styled.header`
	margin-bottom: 10px;
`;

const Main = styled.main`
	width: 100%;
`;
