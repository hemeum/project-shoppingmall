/* eslint-disable @next/next/no-img-element */
import data from './../../data.json';

import styled from 'styled-components';
import Container from '@mui/material/Container';

export default function SubBanner() {
	const sub = data.banners.sub[0];
	return (
		<MyContainer maxWidth="lg">
			<Img src={sub.imgPath} alt={sub.alt}></Img>
		</MyContainer>
	);
}

const MyContainer = styled(Container)`
	margin-top: 50px;
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
