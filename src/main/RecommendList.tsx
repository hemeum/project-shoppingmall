import Lists from '../components/carousel/recommend/Lists';
import ListsTitle from '../components/carousel/recommend/ListsTitle';
import Container from '@mui/material/Container';
import ListsControll from '../components/carousel/recommend/ListsControll';

import styled from 'styled-components';
import data from '../../data.json';
import { useState, useEffect } from 'react';

export default function RecommendList() {
	const items = data.recommend;

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
