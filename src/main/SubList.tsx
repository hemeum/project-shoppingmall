import Container from '@mui/material/Container';
import List from '../components/sub_list/List';
import ListTitle from '../components/sub_list/ListTitle';
import ListBottom from '../components/sub_list/ListBottom';

import styled from 'styled-components';

export interface SubListProps {
	items: { id: string; alt: string; imgPath: string }[];
	title?: string | undefined;
	info?: string | undefined;
}

export default function SubList({ items, title, info }: SubListProps) {
	return (
		<>
			<MyContainer maxWidth="lg">
				<ListTitle title={title} info={info}></ListTitle>
				<article>
					<List items={items}></List>
				</article>
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
