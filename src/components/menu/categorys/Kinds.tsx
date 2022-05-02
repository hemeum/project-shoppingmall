import styled from 'styled-components';

import KindItem from './KindItem';
import data from './../../../../data.json';

interface KindsProps {
	kinds: { id: string; kind: string; parentId: string; items: any[] }[];
	itemIndex: number;
	itemIndexToggle: boolean;
}

interface styleProps {
	leng: number;
	toggle: boolean;
	index: number;
}

export default function Kinds({
	kinds,
	itemIndex,
	itemIndexToggle,
}: KindsProps) {
	const ctgs = data.categorys;
	const ctgLength = ctgs.length;

	return (
		<All leng={ctgLength} toggle={itemIndexToggle} index={itemIndex}>
			{kinds.map((kind) => {
				return <KindItem key={Number(kind.id)} kind={kind.kind}></KindItem>;
			})}
		</All>
	);
}

const All = styled.ul<styleProps>`
	position: absolute;
	top: -1px;
	left: 209px;
	display: block;
	width: 0px;
	color: black;
	border: 1px solid lightgray;
	border-left: 0px;
	font-size: 14px;
	background-color: #e2e2e2;
	opacity: 0;
	visibility: hidden;
	transition: width 0.5s, opacity 0.5s, visibility 0.5s;
	height: ${({ leng }) => {
		return `${leng * 35.4}px`;
	}};
	z-index: ${({ toggle, index }) => {
		return toggle ? '300' : `${200 - index}`;
	}};
`;
