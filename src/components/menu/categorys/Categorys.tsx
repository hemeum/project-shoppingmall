import styled from 'styled-components';

import CategoryItem from './CategoryItem';

import data from '../../../../data.json';

export default function Categorys() {
	const ctgs = data.categorys;
	const ctgLength = ctgs.length;

	return (
		<All leng={ctgLength}>
			{ctgs.map((ctg) => {
				return (
					<CategoryItem
						key={Number(ctg.id)}
						itemIndex={Number(ctg.id) - 1}
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
		return `${leng * -35.3}px`;
	}};
	left: 0;
	width: 210px;
	color: black;
	border: 1px solid lightgray;
	font-size: 14px;
	background-color: #fff;
	z-index: 200;
	opacity: 0;
	visibility: hidden;
	:hover {
		border-right: 0px;
		ul {
			width: 210px;
			opacity: 1;
			visibility: visible;
			li {
				opacity: 1;
				visibility: visible;
				transition: all 2s;
			}
		}
	}
`;
