import BannerItem from './BannerItem';

import styled from 'styled-components';
import { useEffect, useRef } from 'react';

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
	bannerTranslate: number;
}

export default function Banner({ items, bannerTranslate }: BannerProps) {
	const newItems = [...items];
	const firstItems = newItems.splice(0, 4);
	const secondItems = newItems.splice(0, 4);
	const thirdItems = newItems.splice(0, 4);

	const conRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (conRef.current !== null) {
			conRef.current.style.transform = `translateX(-${bannerTranslate}%)`;
		}
	}, [bannerTranslate]);

	return (
		<Con ref={conRef}>
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
	transition: all 0.5s;
`;

const List = styled.ul`
	position: relative;
	width: 33.333333%;
	display: flex;
	gap: 20px;
`;
