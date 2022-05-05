import type { NextPage } from 'next';
import styled from 'styled-components';

import MainBanner from '../src/main/MainBanner';
import RecommendList from '../src/main/RecommendList';
import SubBanner from '../src/main/SubBanner';
import RegretList from '../src/main/RegretList';

const Home: NextPage = () => {
	return (
		<>
			<Main>
				<MainBanner></MainBanner>
				<RecommendList></RecommendList>
				<SubBanner></SubBanner>
				<RegretList></RegretList>
			</Main>
		</>
	);
};

export default Home;

const Main = styled.main`
	width: 100%;
`;
