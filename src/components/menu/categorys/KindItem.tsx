import styled from 'styled-components';

import Link from 'next/link';

interface KindItemProps {
	key: number;
	id?: string;
	kind: string;
	parentId?: string;
	items?: [];
}

export default function KindItem({ kind }: KindItemProps) {
	return (
		<Item>
			<Link href="/">
				<a>{kind}</a>
			</Link>
		</Item>
	);
}

const Item = styled.li`
	padding: 10.5px 30px 10.5px 15px;
	opacity: 0;
	visibility: hidden;

	cursor: pointer;

	:hover {
		a {
			color: red;
			border-bottom: 1px solid red;
		}
	}

	i {
		margin-right: 10px;
	}
`;
