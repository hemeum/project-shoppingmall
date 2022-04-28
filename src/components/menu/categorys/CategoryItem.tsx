import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';

import Kinds from './Kinds';

interface CategoryItemProps {
	key: number;
	ctg: string;
	icon: string;
	kinds: { id: string; kind: string; parentId: string; items: any[] }[];
}

export default function CategoryItem({ ctg, icon, kinds }: CategoryItemProps) {
	const [hoverKind, setHoverKind] = useState(false);
	return (
		<Item
			onMouseOver={() => {
				setHoverKind(true);
			}}
			onMouseLeave={() => {
				setHoverKind(false);
			}}
		>
			<Link href="/">
				<a>
					<i className={icon}></i>
					{ctg}
				</a>
			</Link>
			{hoverKind ? (
				<Kinds kinds={kinds} setHoverKind={setHoverKind}></Kinds>
			) : undefined}
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
