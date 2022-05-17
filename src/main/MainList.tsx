import Lists from '../components/main_list/Lists';
import ListsTitle from '../components/main_list/ListsTitle';
import Container from '@mui/material/Container';
import ListsControll from '../components/main_list/ListsControll';

import styled from 'styled-components';
import { useState, useEffect } from 'react';

export interface MainListProps {
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
	title?: string;
}

export default function MainList({ items, title }: MainListProps) {
	const [listTranslate, setListTranslate] = useState(0);

	useEffect(() => {
		if (listTranslate < 0) {
			setListTranslate(0);
		}
	}, [listTranslate]);

	return (
		<Con maxWidth="lg">
			<ListsTitle title={title}></ListsTitle>
			<ListBox maxWidth="lg">
				<Lists items={items} listTranslate={listTranslate}></Lists>
			</ListBox>
			<ListsControll
				listTranslate={listTranslate}
				setListTranslate={setListTranslate}
			></ListsControll>
		</Con>
	);
}

const Con = styled(Container)`
	position: relative;
	margin-top: 100px;
`;

const ListBox = styled(Container)`
	position: relative;
	padding: 0;
	overflow: hidden;
`;
