import styled from 'styled-components';

export default function BannerNumber({
	lastNumber,
	isNumber,
}: {
	lastNumber: number;
	isNumber: number;
}) {
	return (
		<PageNumber>
			{isNumber}
			<span>/</span>
			{lastNumber}
		</PageNumber>
	);
}

const PageNumber = styled.div`
	position: absolute;
	bottom: 20px;
	right: 50px;
	padding: 5px 10px;
	border-radius: 20px;
	color: #fff;
	background-color: rgba(0, 0, 0, 0.5);

	span {
		margin: 0 5px;
	}
`;
