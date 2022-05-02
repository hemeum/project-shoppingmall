/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';

interface BannerItemProps {
	item: {
		id: string;
		parentId: string;
		alt: string;
		imgPath: string;
		price: string;
		discount: string;
		desc: string;
		only: boolean;
		limit: boolean;
	};
}

export default function BannerItem({ item }: BannerItemProps) {
	const priceArr = Array.from(item.price);
	priceArr.splice(-3, 0, ',');
	const price = priceArr.join('');

	const discountedPrice =
		Number(item.price) - Math.ceil(Number(item.price) / Number(item.discount));
	const discountedPriceArr = Array.from(String(discountedPrice));
	discountedPriceArr.splice(-3, 0, ',');
	const realDiscountedPrice = discountedPriceArr.join('');

	return (
		<Item>
			<img src={item.imgPath} alt={item.alt}></img>
			<p>{item.alt}</p>
			<p>
				{Number(item.discount) === 0 ? price + '원' : item.discount + '%'}
				{Number(item.discount) === 0 ? undefined : (
					<span>{realDiscountedPrice + '원'}</span>
				)}
			</p>
			{Number(item.discount) !== 0 ? <p>{price + '원'}</p> : undefined}
		</Item>
	);
}

const Item = styled.li`
	width: 25%;
	img {
		width: 100%;
		height: 80%;
		object-fit: cover;
	}
`;
