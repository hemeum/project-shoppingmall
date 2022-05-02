import Banner from '../components/carousel/sub/Banner';
import BannerTitle from '../components/carousel/sub/BannerTitle';
import Container from '@mui/material/Container';

import styled from 'styled-components';
import data from './../../data.json';

export default function RecommendBanner() {
	const items = data.recommend;
	return (
		<>
			<MyContainer maxWidth="lg">
				<BannerTitle title={'이 상품 어때요?'}></BannerTitle>
				<Banner items={items}></Banner>
			</MyContainer>
		</>
	);
}

const MyContainer = styled(Container)`
	position: relative;
	margin-top: 100px;
	padding: 0;
	overflow: hidden;
`;
