import Banner from '../components/carousel/Banner';

import styled from 'styled-components';

export default function MainBanner() {
	const items = [
		{ id: 1, alt: '1', imgPath: '/imgs/main-banner-1.webp' },
		{ id: 2, alt: '2', imgPath: '/imgs/main-banner-2.jpg' },
		{ id: 3, alt: '3', imgPath: '/imgs/main-banner-3.webp' },
		{ id: 4, alt: '4', imgPath: '/imgs/main-banner-4.webp' },
		{ id: 5, alt: '5', imgPath: '/imgs/main-banner-5.webp' },
		{ id: 6, alt: '6', imgPath: '/imgs/main-banner-6.webp' },
		{ id: 7, alt: '7', imgPath: '/imgs/main-banner-7.webp' },
		{ id: 8, alt: '8', imgPath: '/imgs/main-banner-8.webp' },
		{ id: 9, alt: '9', imgPath: '/imgs/main-banner-9.webp' },
	];

	return (
		<>
			<Con>
				<Banner items={items}></Banner>
			</Con>
		</>
	);
}

const Con = styled.div`
	width: 100%;
	height: 350px;
	overflow: hidden;
	:hover {
		* {
			opacity: 1;
			visibility: visible;
		}
	}
`;
