import type { NextPage } from 'next';
import styled from 'styled-components';

import MainBanner from '../src/main/MainBanner';
import RecommendList from '../src/main/RecommendList';

const Home: NextPage = () => {
	return (
		<>
			<Main>
				<MainBanner></MainBanner>
				<RecommendList></RecommendList>
			</Main>
		</>
	);
};

export default Home;

const Main = styled.main`
	width: 100%;
`;
