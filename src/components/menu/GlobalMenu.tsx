import styled from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';

import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import Categorys from './categorys/Categorys';

export default function GlobalMenu() {
	const [hoverCtg, setHoverCtg] = useState(false);
	return (
		<>
			<ListBox>
				<FirstListItem
					hoverCtg={hoverCtg}
					onMouseOver={() => {
						setHoverCtg(true);
					}}
					onMouseLeave={() => {
						setHoverCtg(false);
					}}
				>
					<Link href="/">
						<a>
							<MenuSharpIcon fontSize="medium"></MenuSharpIcon>
							<span>전체 카테고리</span>
						</a>
					</Link>
				</FirstListItem>
				<ListItem>
					<Link href="/">
						<a>신상품</a>
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/">
						<a>베스트</a>
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/">
						<a>알뜰쇼핑</a>
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/">
						<a>특가/혜택</a>
					</Link>
				</ListItem>
				{hoverCtg ? (
					<Categorys setHoverCtg={setHoverCtg}></Categorys>
				) : undefined}
			</ListBox>
		</>
	);
}

const ListBox = styled.ul`
	position: relative;
	display: flex;
	align-items: center;
`;

const ListItem = styled.li`
	font-size: 16px;
	font-weight: 700;
	padding: 20px 35px;
	cursor: pointer;

	a {
		padding-bottom: 3px;
	}
	:hover {
		a {
			color: red;
			border-bottom: 1px solid red;
		}
	}
`;

const FirstListItem = styled(ListItem)<{ hoverCtg: boolean }>`
	padding-left: 0;

	:hover {
		a {
			color: red;
			border-bottom: 0px;
		}
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-bottom: 0px;

		span {
			margin-left: 10px;
		}
	}

	${({ hoverCtg }) => {
		return hoverCtg ? 'a{color:red}' : undefined;
	}}
`;
