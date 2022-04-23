import styled from 'styled-components';
import Link from 'next/link';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

export default function GlobalMenu() {
	return (
		<>
			<ListBox>
				<ListItem>
					<Link href="/">
						<a>
							<MenuSharpIcon fontSize="medium"></MenuSharpIcon>
							<span>전체 카테고리</span>
						</a>
					</Link>
				</ListItem>
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
			</ListBox>
		</>
	);
}

const ListBox = styled.ul`
	display: flex;
	gap: 60px;
	align-items: center;
`;

const ListItem = styled.li`
	font-size: 16px;
	font-weight: 700;

	a:first-child {
		display: flex;
		justify-content: center;
		align-items: center;

		span {
			margin-left: 10px;
		}
	}
`;
