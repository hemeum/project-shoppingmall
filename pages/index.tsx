import type { NextPage } from 'next';
import styled from 'styled-components';

import MainBanner from '../src/main/MainBanner';
import RecommendList from '../src/main/RecommendList';
import DiscountBanner from '../src/main/DiscountBanner';
import RegretList from '../src/main/RegretList';
import DeliveryBanner from '../src/main/DeliveryBanner';
import InstaList from '../src/main/InstaList';

const Home: NextPage = () => {
	return (
		<>
			<Main>
				<MainBanner></MainBanner>
				<RecommendList></RecommendList>
				<DiscountBanner></DiscountBanner>
				<RegretList></RegretList>
				<DeliveryBanner></DeliveryBanner>
				<InstaList></InstaList>
			</Main>
		</>
	);
};

export default Home;

const Main = styled.main`
	width: 100%;
`;
