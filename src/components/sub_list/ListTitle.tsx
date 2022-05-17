import styled from 'styled-components';

export default function ListTitle({
	title,
	info,
}: {
	title: string | undefined;
	info: string | undefined;
}) {
	return (
		<Con>
			<TextCon>
				<Title>{title}</Title>
				<Info>{info}</Info>
			</TextCon>
		</Con>
	);
}

const Con = styled.div`
	height: 70px;
	margin-bottom: 20px;
`;

const TextCon = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
`;

const Title = styled.h3`
	font-size: 28px;
	font-weight: bold;
`;

const Info = styled.p`
	color: gray;
	margin-top: 20px;
`;
