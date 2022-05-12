import type { NextPage } from 'next';
import styled from 'styled-components';

import MainBanner from '../src/main/MainBanner';
import RecommendList from '../src/main/main_lists/RecommendList';
import DiscountBanner from '../src/main/sub_banners/DiscountBanner';
import RegretList from '../src/main/main_lists/RegretList';
import DeliveryBanner from '../src/main/sub_banners/DeliveryBanner';
import InstaList from '../src/main/sub_lists/InstaList';

import data from './../data.json';

const Home: NextPage = ({
	main,
	recommend,
	firstSub,
	regret,
	secondSub,
	insta,
}: any) => {
	return (
		<>
			<Main>
				<MainBanner items={main}></MainBanner>
				<RecommendList items={recommend}></RecommendList>
				<DiscountBanner sub={firstSub}></DiscountBanner>
				<RegretList items={regret}></RegretList>
				<DeliveryBanner sub={secondSub}></DeliveryBanner>
				<InstaList items={insta}></InstaList>
			</Main>
		</>
	);
};

export default Home;

const Main = styled.main`
	width: 100%;
`;

export async function getStaticProps() {
	const main = data.banners.main;
	const recommend = data.recommend;
	const firstSub = data.banners.sub[0];
	const regret = data.regret;
	const secondSub = data.banners.sub[1];
	const insta = data.insta;

	return {
		props: {
			main: main,
			recommend: recommend,
			firstSub: firstSub,
			regret: regret,
			secondSub: secondSub,
			insta: insta,
		},
	};
}
