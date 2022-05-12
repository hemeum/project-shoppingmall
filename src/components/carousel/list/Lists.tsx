import ListItem from './ListItem';

import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { ListProps } from '../../../main/RecommendList';

interface ListsProps extends ListProps {
	listTranslate: number;
}

export default function Lists({ items, listTranslate }: ListsProps) {
	const newRecommend = [...items];
	const firstRecommend = newRecommend.splice(0, 4);
	const secondRecommend = newRecommend.splice(0, 4);
	const thirdRecommend = newRecommend.splice(0, 4);

	const conRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (conRef.current !== null) {
			conRef.current.style.transform = `translateX(-${listTranslate}%)`;
		}
	}, [listTranslate]);

	return (
		<Con ref={conRef}>
			<List>
				{firstRecommend.map((item) => {
					return <ListItem key={item.id} item={item}></ListItem>;
				})}
			</List>
			<List>
				{secondRecommend.map((item) => {
					return <ListItem key={item.id} item={item}></ListItem>;
				})}
			</List>
			<List>
				{thirdRecommend.map((item) => {
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
