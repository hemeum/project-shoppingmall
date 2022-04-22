import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export default function UserMenu() {
	return (
		<Con>
			<div>
				<Image
					src="/imgs/delivery.webp"
					width="121px"
					height="22px"
					alt="샛별 택배 배송안내"
				/>
			</div>
			<ListBox>
				<ListItem>
					<Link href="/">
						<a>회원가입</a>
					</Link>
				</ListItem>
				<span>|</span>
				<ListItem>
					<Link href="/">
						<a>로그인</a>
					</Link>
				</ListItem>
				<span>|</span>
				<ListItem>
					<Link href="/">
						<a>고객센터</a>
					</Link>
				</ListItem>
			</ListBox>
		</Con>
	);
}

const Con = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;

	img {
		cursor: pointer;
	}
`;

const ListBox = styled.ul`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 10px;

	span {
		font-size: 13px;
		color: lightgray;
	}
`;

const ListItem = styled.li`
	font-size: 12px;
	color: black;
`;
