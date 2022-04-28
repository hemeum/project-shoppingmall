import type { NextPage } from 'next';
import styled from 'styled-components';

import MainBanner from '../src/main/MainBanner';

const Home: NextPage = () => {
	return (
		<>
			<Main>
				<MainBanner></MainBanner>
			</Main>
		</>
	);
};

export default Home;

const Main = styled.main`
	width: 100%;
`;
