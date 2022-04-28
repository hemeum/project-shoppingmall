import styled from 'styled-components';

import CategoryItem from './CategoryItem';

import data from '../../../data.json';

interface CategorysProps {
	setHoverCtg: (hoverCtg: boolean) => void;
}

export default function Categorys({ setHoverCtg }: CategorysProps) {
	const ctgs = data.categorys;
	const ctgLength = ctgs.length;
	return (
		<All
			leng={ctgLength}
			onMouseOver={() => {
				setHoverCtg(true);
			}}
			onMouseLeave={() => {
				setHoverCtg(false);
			}}
		>
			{ctgs.map((ctg) => {
				return (
					<CategoryItem
						key={Number(ctg.id)}
						ctg={ctg.ctg}
						icon={ctg.icon}
						kinds={ctg.kinds}
					></CategoryItem>
				);
			})}
		</All>
	);
}

const All = styled.ul<{ leng: number }>`
	position: absolute;
	bottom: ${({ leng }) => {
		return `${leng * -36.3}px`;
	}};
	left: 0;
	color: black;
	border: 1px solid lightgray;
	background-color: #fff;
	z-index: 100;
`;
