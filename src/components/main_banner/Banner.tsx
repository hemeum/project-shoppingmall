import styled from 'styled-components';
import Container from '@mui/material/Container';
import { useEffect, useRef, useState } from 'react';

import BannerItem from './BannerItem';
import BannerControll from './BannerControll';
import BannerNumber from './BannerNumber';
import { MainBannerProps } from '../../main/MainBanner';

interface styleProps {
	ref: any;
	length: number;
}

export default function Banner({ items }: MainBannerProps) {
	const CrsRef = useRef<HTMLDivElement>(null);

	const [isNumber, setIsNumber] = useState(1);
	const [flag, setFlag] = useState(true); // 첫 로딩 시 맨 앞에 있는 마지막 배너 클론은 transition 먹지 않게하기 위함.
	const [rightFlag, setRightFlag] = useState(false);
	const [leftFlag, setLeftFlag] = useState(false);

	const numbers = items.map((item) => Number(item.id));
	const lastNumber = numbers[numbers.length - 1];

	const newItems = [...items];
	newItems.push(items[0]);
	newItems.unshift(items[items.length - 1]);

	useEffect(() => {
		// 4초마다 바뀌는 isNumber에 따라 배너 루프 슬라이드
		const timer = setInterval(() => {
			if (isNumber === lastNumber + 1) {
				// isNumber가 마지막 배너 + 클론 배너일 때
				setIsNumber(1);
			} else {
				setIsNumber(isNumber + 1);
			}
		}, 4000);
		return () => clearInterval(timer);
	}, [isNumber, lastNumber]);

	useEffect(() => {
		// arrow 클릭 시 바뀌는 isNumber를 통해 화면 슬라이드
		if (CrsRef.current !== null) {
			if (isNumber === lastNumber + 1) {
				// 마지막 배너 뒤에 클론한 첫 번째 배너에 있을 때
				setTimeout(() => {
					// 첫 번째 배너로 넘기기
					setIsNumber(1);
				}, 300);
				setRightFlag(true);
			}
			if (isNumber === 0) {
				// 첫 번째 배너 앞에 클론한 마지막 배너에 있을 때
				setTimeout(() => {
					// 마지막 배너로 넘기기
					setIsNumber(lastNumber);
				}, 300);
				setLeftFlag(true);
			}
			if (isNumber === 1 && rightFlag) {
				// 첫번째 배너로 이동할 때 효과없애기
				CrsRef.current.style.transition = 'all 0s';
				CrsRef.current.style.transform = `translateX(-${
					isNumber * (100 / newItems.length)
				}%)`;
				setTimeout(() => {
					setRightFlag(false);
				}, 300);
			} else if (isNumber === lastNumber && leftFlag) {
				// 마지막 배너로 이동할 때 효과없애기
				CrsRef.current.style.transition = 'all 0s';
				CrsRef.current.style.transform = `translateX(-${
					isNumber * (100 / newItems.length)
				}%)`;
				setTimeout(() => {
					setLeftFlag(false);
				}, 300);
			} else {
				CrsRef.current.style.transform = `translateX(-${
					isNumber * (100 / newItems.length)
				}%)`;
				CrsRef.current.style.transition = 'all 0.3s';

				if (isNumber === 1 && flag) {
					// 첫 로딩 시 첫 번째 배너 앞 마지막 배너 뛰어넘기
					CrsRef.current.style.transition = 'all 0s';
				}
			}
		}

		// 가만히 있을 시 루프 슬라이드
		const timer = setInterval(() => {
			if (CrsRef.current !== null) {
				CrsRef.current.style.transform = `translateX(-${
					isNumber * (100 / newItems.length)
				}%)`;
				CrsRef.current.style.transition = 'all 0.3s';
			}
		}, 4000);

		return () => clearInterval(timer);
	}, [rightFlag, leftFlag, flag, isNumber, newItems.length, lastNumber]);

	return (
		<>
			<Carousel ref={CrsRef} length={newItems.length}>
				{newItems.map((item, index) => {
					return (
						<BannerItem
							key={index}
							item={item}
							length={newItems.length}
						></BannerItem>
					);
				})}
			</Carousel>
			<BNCon maxWidth="lg">
				<BannerNumber
					lastNumber={lastNumber}
					isNumber={isNumber}
				></BannerNumber>
			</BNCon>
			<BCCon maxWidth="lg">
				<BannerControll
					isNumber={isNumber}
					setIsNumber={setIsNumber}
					lastNumber={lastNumber}
					setFlag={setFlag}
				></BannerControll>
			</BCCon>
		</>
	);
}

const Carousel = styled.div<styleProps>`
	${({ length }) => {
		return `width:${length * 100}%`;
	}};
	height: 100%;
	display: flex;
`;

const BNCon = styled(Container)`
	position: relative;
`;

const BCCon = styled(Container)`
	position: relative;
`;
