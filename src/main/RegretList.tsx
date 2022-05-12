import Lists from '../components/carousel/list/Lists';
import ListsTitle from '../components/carousel/list/ListsTitle';
import Container from '@mui/material/Container';
import ListsControll from '../components/carousel/list/ListsControll';

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { ListProps } from './RecommendList';

export default function RegretList({ items }: ListProps) {
	const [listTranslate, setListTranslate] = useState(0);

	useEffect(() => {
		if (listTranslate < 0) {
			setListTranslate(0);
		}
	}, [listTranslate]);

	return (
		<Con maxWidth="lg">
			<ListCon maxWidth="lg">
				<ListsTitle title={'놓치면 후회할 가격!'}></ListsTitle>
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
