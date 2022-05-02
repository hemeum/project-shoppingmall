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
	isNew: boolean;
}

export default function CategoryItem({
	itemIndex,
	ctg,
	icon,
	kinds,
	isNew,
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
					{isNew ? <I className="fa-solid fa-n"></I> : undefined}
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

	i:first-child {
		margin-right: 10px;
	}
`;

const I = styled.i`
	padding: 2px 3px;
	border-radius: 50%;
	margin-left: 10px;
	font-size: 10px;
	background-color: pink;
	color: #fff;
`;
