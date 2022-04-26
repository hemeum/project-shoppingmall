import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

import styled from 'styled-components';

interface BannerControllProps {
	isNumber: number;
	setIsNumber: (isNumber: number) => void;
	lastNumber: number;
	setFlag: (flag: boolean) => void;
}

export default function BannerControll({
	isNumber,
	setIsNumber,
	lastNumber,
	setFlag,
}: BannerControllProps) {
	const handleRightBanner = () => {
		setTimeout(() => {
			// 연속해서 클릭 방지위해 setTimeout
			if (isNumber < lastNumber + 1) {
				setIsNumber(isNumber + 1);
				setFlag(false);
			}
		}, 200);
	};

	const handleLeftBanner = () => {
		setTimeout(() => {
			if (isNumber > 0) {
				setIsNumber(isNumber - 1);
				setFlag(false);
			}
		}, 200);
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
