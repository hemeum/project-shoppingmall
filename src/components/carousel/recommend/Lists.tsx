import ListItem from './ListItem';

import styled from 'styled-components';
import { useEffect, useRef } from 'react';

interface ListsProps {
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
	listTranslate: number;
}

export default function Lists({ items, listTranslate }: ListsProps) {
	const newItems = [...items];
	const firstItems = newItems.splice(0, 4);
	const secondItems = newItems.splice(0, 4);
	const thirdItems = newItems.splice(0, 4);

	const conRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (conRef.current !== null) {
			conRef.current.style.transform = `translateX(-${listTranslate}%)`;
		}
	}, [listTranslate]);

	return (
		<Con ref={conRef}>
			<List>
				{firstItems.map((item) => {
					return <ListItem key={item.id} item={item}></ListItem>;
				})}
			</List>
			<List>
				{secondItems.map((item) => {
					return <ListItem key={item.id} item={item}></ListItem>;
				})}
			</List>
			<List>
				{thirdItems.map((item) => {
					return <ListItem key={item.id} item={item}></ListItem>;
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
