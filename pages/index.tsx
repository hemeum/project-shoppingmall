import type { NextPage } from 'next';
import styled from 'styled-components';

import MainBanner from '../src/main/MainBanner';
import MainList from '../src/main/MainList';
import SubList from '../src/main/SubList';
import SubBanner from '../src/main/SubBanner';

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
				<section>
					<MainBanner items={main}></MainBanner>
				</section>
				<section>
					<MainList items={recommend} title={'이 상품 어때요?'}></MainList>
				</section>
				<section>
					<SubBanner sub={firstSub}></SubBanner>
				</section>
				<section>
					<MainList items={regret} title={'놓치면 후회할 가격!'}></MainList>
				</section>
				<section>
					<SubBanner sub={secondSub}></SubBanner>
				</section>
				<section>
					<SubList
						items={insta}
						title={'인스타그램 고객 후기'}
						info={'더 많은 고객 후기가 궁금하다면?'}
					></SubList>
				</section>
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
