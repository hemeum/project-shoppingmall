import Lists from '../../components/carousel/main_list/Lists';
import ListsTitle from '../../components/carousel/main_list/ListsTitle';
import Container from '@mui/material/Container';
import ListsControll from '../../components/carousel/main_list/ListsControll';

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
}

export default function RecommendList({ items }: MainListProps) {
	const [listTranslate, setListTranslate] = useState(0);

	useEffect(() => {
		if (listTranslate < 0) {
			setListTranslate(0);
		}
	}, [listTranslate]);

	return (
		<Con maxWidth="lg">
			<ListCon maxWidth="lg">
				<ListsTitle title={'이 상품 어때요?'}></ListsTitle>
				<Lists items={items} listTranslate={listTranslate}></Lists>
			</ListCon>
			<ListsControll
				listTranslate={listTranslate}
				setListTranslate={setListTranslate}
			></ListsControll>
		</Con>
	);
}

const Con = styled(Container)`
	position: relative;
`;

const ListCon = styled(Container)`
	position: relative;
	margin-top: 100px;
	padding: 0;
	overflow: hidden;
`;
