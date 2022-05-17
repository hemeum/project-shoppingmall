/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';

import { SubListProps } from '../../main/SubList';

export default function List({ items }: SubListProps) {
	return (
		<>
			<Sub>
				{items.map((insta) => {
					return (
						<SubItem key={Number(insta.id)}>
							<img src={insta.imgPath} alt={insta.alt}></img>
						</SubItem>
					);
				})}
			</Sub>
		</>
	);
}

const Sub = styled.ul`
	display: flex;
	width: 100%;
	height: 200px;
`;

const SubItem = styled.li`
	width: 20%;
	height: 100%;
	cursor: pointer;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
