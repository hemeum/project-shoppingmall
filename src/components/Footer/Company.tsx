import styled from 'styled-components';

export default function Company() {
	const guides = [
		{ id: 1, name: '컬리소개' },
		{ id: 2, name: '컬리소개영상' },
		{ id: 3, name: '인재채용' },
		{ id: 4, name: '이용약관' },
		{ id: 5, name: '개인정보처리방침' },
		{ id: 6, name: '이용안내' },
	];
	return (
		<Con>
			<GuideList>
				{guides.map((guide) => (
					<li key={guide.id}>{guide.name}</li>
				))}
			</GuideList>
			<Address>
				법인명(상호) : 주식회사 컬리 | 사업자등록번호 : 261-81-23567{' '}
				<span>사업자정보 확인</span>
				<br />
				통신판매업 : 제2018-서울강남-01646호 | 개인정보보호책임자 : 이원준
				<br />
				주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) | 대표이사 : 김슬아
				<br />
				입점문의 : <span>입점문의하기</span> | 마케팅제휴 :{' '}
				<span>business@kurlycorp.com</span>
				<br />
				채용문의 : <span>recruit@kurlycorp.com</span>
				<br />
				팩스 : 070-7500-6098 | 이메일 <span>help@kurlycorp.com</span>
				<br />
				대량주문 문의 : kurlygift@kurlycorp.com
			</Address>
			<IconBox>
				<i className="fa-brands fa-facebook"></i>
				<i className="fa-brands fa-instagram-square"></i>
				<i className="fa-solid fa-blog"></i>
				<i className="fa-brands fa-youtube"></i>
				<i className="fa-brands fa-twitter"></i>
				<i className="fa-brands fa-twitch"></i>
			</IconBox>
		</Con>
	);
}

const Con = styled.div``;

const GuideList = styled.ul`
	display: flex;
	gap: 15px;
	font-size: 15px;
	margin-bottom: 30px;
	li {
		cursor: pointer;
	}
`;

const Address = styled.address`
	font-size: 13px;
	color: gray;
	line-height: 20px;
	span {
		color: red;
	}
	margin-bottom: 50px;
`;

const IconBox = styled.div`
	display: flex;
	gap: 15px;
	i {
		font-size: 28px;
		cursor: pointer;
		color: red;
	}
`;
