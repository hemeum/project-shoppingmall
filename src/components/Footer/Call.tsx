import styled from 'styled-components';

export default function Call() {
	return (
		<>
			<Con>
				<h3>고객행복센터</h3>
				<NumberBox>
					<p>1644-1107</p>
					<div>
						<p>365고객센터</p>
						<p>오전 7시-오후 7시</p>
					</div>
				</NumberBox>
				<ButtonBox>
					<button type="button">카카오톡 문의</button>
					<div>
						<p>365고객센터</p>
						<p>오전 7시-오후 7시</p>
					</div>
				</ButtonBox>
				<ButtonBox>
					<button type="button">1:1 문의</button>
					<div>
						<p>24시간 접수 가능</p>
						<p>고객센터 운영시간에 순차적으로 답변해드리겠습니다.</p>
					</div>
				</ButtonBox>
				<ButtonBox>
					<button type="button">대량주문 문의</button>

					<p>비회원의 경우 메일로 문의 바랍니다.</p>
				</ButtonBox>
			</Con>
		</>
	);
}

const Con = styled.div`
	> h3 {
		font-size: 22px;
		font-weight: 700;
	}
`;

const NumberBox = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	margin-top: 30px;
	> p {
		font-size: 30px;
		font-weight: 700;
	}
	> div {
		p {
			font-size: 15px;
		}
		p:first-child {
			padding-top: 4px;
		}
		p:last-child {
			margin-top: 11px;
			color: gray;
		}
	}
`;

const ButtonBox = styled.div`
	display: flex;
	gap: 20px;
	margin-top: 20px;
	> button {
		width: 150px;
		height: 45px;
		background-color: transparent;
		border: 1px solid #e2e2e2;
		border-radius: 5px;
		font-size: 14px;
		font-weight: bold;
		cursor: pointer;
	}
	> div {
		position: relative;
		height: 45px;
		p {
			font-size: 15px;
		}
		p:nth-of-type(1) {
			padding-top: 3px;
		}
		p:nth-of-type(2) {
			margin-top: 11px;
			color: gray;
		}
	}
	> p {
		line-height: 45px;
		font-size: 15px;
		color: gray;
	}
`;
