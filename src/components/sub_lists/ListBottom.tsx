import styled from 'styled-components';

export default function ListBottom() {
	return (
		<Con>
			<Address>@marketKurly_regram</Address>
		</Con>
	);
}

const Con = styled.div`
	height: 40px;
	line-height: 40px;
`;

const Address = styled.p`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	font-weight: bold;
	cursor: pointer;
`;
