import styled from 'styled-components';
import Link from 'next/link';

export default function GlobalMenu() {
	return (
		<>
			<ListBox>
				<ListItem>
					<Link href="/">
						<a>
							<span>아이콘</span>전체 카테고리
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
	gap: 50px;
	align-items: center;
`;

const ListItem = styled.li`
	font-size: 16px;
`;
