import styled from 'styled-components';
import { useEffect, useRef } from 'react';

import BannerItem from './BannerItem';

interface BannerProps {
	items: { id: number; alt: string; imgPath: string }[];
	isNumber: number;
}

interface styleProps {
	ref: any;
	length: number;
}

export default function Banner({ items, isNumber }: BannerProps) {
	const CrsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (CrsRef.current !== null) {
			CrsRef.current.style.transform = `translateX(-${
				(isNumber - 1) * (100 / items.length)
			}%)`;
		}
	}, [isNumber, items.length]);

	useEffect(() => {
		let num = isNumber;
		const timer = setInterval(() => {
			if (CrsRef.current !== null) {
				CrsRef.current.style.transform = `translateX(-${
					num * (100 / items.length)
				}%)`;
			}
			if (num === items.length - 1) {
				num = 0;
			} else {
				num = num + 1;
			}
		}, 4000);
		return () => clearInterval(timer);
	}, [items, isNumber]);

	return (
		<Carousel ref={CrsRef} length={items.length}>
			{items.map((item) => {
				return (
					<BannerItem
						key={item.id}
						item={item}
						length={items.length}
					></BannerItem>
				);
			})}
		</Carousel>
	);
}

const Carousel = styled.div<styleProps>`
	${({ length }) => {
		return `width:${length * 100}%`;
	}};
	height: 100%;
	display: flex;
	transition: all 0.5s;
`;
