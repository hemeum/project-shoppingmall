import styled from 'styled-components';
import { useState } from 'react';

import Link from 'next/link';
import Kinds from './Kinds';

interface CategoryItemProps {
	key: number;
	itemIndex: number;
	ctg: string;
	icon: string;
	kinds: { id: string; kind: string; parentId: string; items: any[] }[];
}

export default function CategoryItem({
	itemIndex,
	ctg,
	icon,
	kinds,
}: CategoryItemProps) {
	const [itemIndexToggle, setItemIndexToggle] = useState(false);

	return (
		<Item
			onMouseOver={() => {
				setItemIndexToggle(true);
			}}
			onMouseLeave={() => {
				setItemIndexToggle(false);
			}}
		>
			<Link href="/">
				<a>
					<i className={icon}></i>
					{ctg}
				</a>
			</Link>

			<Kinds
				kinds={kinds}
				itemIndex={itemIndex}
				itemIndexToggle={itemIndexToggle}
			></Kinds>
		</Item>
	);
}

const Item = styled.li`
	padding: 10px 30px 10px 15px;
	cursor: pointer;

	:hover {
		> a {
			color: red;
		}
		background-color: #e2e2e2;
	}

	i {
		margin-right: 10px;
	}
`;
