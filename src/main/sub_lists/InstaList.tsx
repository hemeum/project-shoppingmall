import Container from '@mui/material/Container';
import List from '../../components/sub_list/List';
import ListTitle from '../../components/sub_list/ListTitle';
import ListBottom from '../../components/sub_list/ListBottom';

import styled from 'styled-components';

export interface ListProps {
	items: { id: string; alt: string; imgPath: string }[];
}

export default function InstaList({ items }: ListProps) {
	return (
		<>
			<MyContainer maxWidth="lg">
				<ListTitle
					title={'인스타그램 고객 후기'}
					sub={'더 많은 고객 후기가 궁금하다면?'}
				></ListTitle>
				<List items={items}></List>
				<ListBottom></ListBottom>
			</MyContainer>
		</>
	);
}

const MyContainer = styled(Container)`
	position: relative;
	margin-top: 100px;
	margin-bottom: 80px;
`;
