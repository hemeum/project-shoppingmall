import type { NextPage } from 'next';
import styled from 'styled-components';

import MainBanner from '../src/main/MainBanner';
import RecommendBanner from '../src/main/RecommendBanner';

const Home: NextPage = () => {
	return (
		<>
			<Main>
				<MainBanner></MainBanner>
				<RecommendBanner></RecommendBanner>
			</Main>
		</>
	);
};

export default Home;

const Main = styled.main`
	width: 100%;
`;
