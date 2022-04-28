import styled from 'styled-components';

import KindItem from './KindItem';
import data from './../../../../data.json';

interface KindsProps {
	kinds: { id: string; kind: string; parentId: string; items: any[] }[];
	setHoverKind: (hoverKind: boolean) => void;
}

export default function Kinds({ kinds, setHoverKind }: KindsProps) {
	const ctgs = data.categorys;
	const ctgLength = ctgs.length;

	return (
		<All
			leng={ctgLength}
			onMouseOver={() => {
				setHoverKind(true);
			}}
			onMouseLeave={() => {
				setHoverKind(false);
			}}
		>
			{kinds.map((kind) => {
				return <KindItem key={Number(kind.id)} kind={kind.kind}></KindItem>;
			})}
		</All>
	);
}

const All = styled.ul<{ leng: number }>`
	position: absolute;
	top: -1px;
	right: -210px;
	width: 210px;
	height: ${({ leng }) => {
		return `${leng * 35.3}px`;
	}};
	color: black;
	border: 1px solid lightgray;
	font-size: 14px;
	background-color: #e2e2e2;
	z-index: 100;
`;
