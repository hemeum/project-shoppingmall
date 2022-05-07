/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';
import Container from '@mui/material/Container';

interface BannerProps {
	sub: {
		id: string;
		imgPath: string;
		alt: string;
	};
}

export default function Banner({ sub }: BannerProps) {
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
