import BannerItem from './BannerItem';

import styled from 'styled-components';

interface BannerProps {
	items: {
		id: string;
		parentId: string;
		alt: string;
		imgPath: string;
		price: string;
		discount: string;
		desc: string;
		only: boolean;
		limit: boolean;
	}[];
}

export default function Banner({ items }: BannerProps) {
	const newItems = [...items];
	const firstItems = newItems.splice(0, 4);
	const secondItems = newItems.splice(0, 4);
	const thirdItems = newItems.splice(0, 4);

	return (
		<Con>
			<List>
				{firstItems.map((item) => {
					return <BannerItem key={item.id} item={item}></BannerItem>;
				})}
			</List>
			<List>
				{secondItems.map((item) => {
					return <BannerItem key={item.id} item={item}></BannerItem>;
				})}
			</List>
			<List>
				{thirdItems.map((item) => {
					return <BannerItem key={item.id} item={item}></BannerItem>;
				})}
			</List>
		</Con>
	);
}

const Con = styled.div`
	width: 300%;
	display: flex;
	align-items: center;
`;

const List = styled.ul`
	width: 33.333333%;
	display: flex;
	gap: 20px;
	border: 1px solid red;
`;
