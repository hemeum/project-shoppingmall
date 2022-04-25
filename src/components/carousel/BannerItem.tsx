import styled from 'styled-components';

interface BannerItemProps {
	key: number;
	item: {
		id: number;
		alt: string;
		imgPath: string;
	};
	length: number;
}

export default function BannerItem(props: BannerItemProps) {
	// eslint-disable-next-line @next/next/no-img-element
	return (
		<Img
			src={props.item.imgPath}
			alt={props.item.alt}
			length={props.length}
		></Img>
	);
}

const Img = styled.img<{ length: number }>`
	${({ length }) => {
		return `width:${100 / length}%`;
	}};
	height: 100%;
	object-fit: cover;
`;
