import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

import styled from 'styled-components';

interface BannerControllProps {
	isNumber: number;
	setIsNumber: (isNumber: number) => void;
	lastNumber: number;
}

export default function BannerControll({
	isNumber,
	setIsNumber,
	lastNumber,
}: BannerControllProps) {
	const handleRightBanner = () => {
		if (isNumber === lastNumber) {
			setIsNumber(1);
		} else {
			setIsNumber(isNumber + 1);
		}
	};

	const handleLeftBanner = () => {
		if (isNumber === 1) {
			setIsNumber(lastNumber);
		} else {
			setIsNumber(isNumber - 1);
		}
	};

	return (
		<>
			<RightArrow
				onClick={() => {
					handleRightBanner();
				}}
			></RightArrow>
			<LeftArrow
				onClick={() => {
					handleLeftBanner();
				}}
			></LeftArrow>
		</>
	);
}

const RightArrow = styled(ArrowForwardIosOutlinedIcon)`
	position: absolute;
	bottom: 175px;
	right: 0;
	transform: translateY(50%);
	color: #fff;
	background-color: rgba(0, 0, 0, 0.5);
	font-size: 45px;
	padding: 10px;
	border-radius: 50%;
	opacity: 0;
	visibility: hidden;
	transition: all 1s;
	cursor: pointer;
`;

const LeftArrow = styled(ArrowBackIosOutlinedIcon)`
	position: absolute;
	bottom: 175px;
	left: 0;
	transform: translateY(50%);
	color: #fff;
	background-color: rgba(0, 0, 0, 0.5);
	font-size: 45px;
	padding: 10px;
	border-radius: 50%;
	opacity: 0;
	visibility: hidden;
	transition: all 1s;
	cursor: pointer;
`;
