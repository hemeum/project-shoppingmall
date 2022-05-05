import Banner from '../components/carousel/sub/Banner';
import BannerTitle from '../components/carousel/sub/BannerTitle';
import Container from '@mui/material/Container';
import BannerControll from '../components/carousel/sub/BannerControll';

import styled from 'styled-components';
import data from './../../data.json';
import { useState, useEffect } from 'react';

export default function RecommendBanner() {
	const items = data.recommend;

	const [bannerTranslate, setBannerTranslate] = useState(0);

	useEffect(() => {
		if (bannerTranslate < 0) {
			setBannerTranslate(0);
		}
	}, [bannerTranslate]);

	return (
		<Con maxWidth="lg">
			<BannerCon maxWidth="lg">
				<BannerTitle title={'이 상품 어때요?'}></BannerTitle>
				<Banner items={items} bannerTranslate={bannerTranslate}></Banner>
			</BannerCon>
			<BannerControll
				bannerTranslate={bannerTranslate}
				setBannerTranslate={setBannerTranslate}
			></BannerControll>
		</Con>
	);
}

const Con = styled(Container)`
	position: relative;
`;

const BannerCon = styled(Container)`
	position: relative;
	margin-top: 100px;
	padding: 0;
	overflow: hidden;
`;
