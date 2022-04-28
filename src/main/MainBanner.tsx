import Banner from '../components/carousel/Banner';

import styled from 'styled-components';
import data from './../../data.json';

export default function MainBanner() {
	const items = data.banners;

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
