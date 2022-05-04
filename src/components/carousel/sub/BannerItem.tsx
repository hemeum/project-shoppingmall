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
			<ImgBox>
				<img src={item.imgPath} alt={item.alt}></img>
				<CartIcon className="fa-solid fa-cart-shopping"></CartIcon>
			</ImgBox>
			<Title>{item.alt}</Title>
			<Price>
				{Number(item.discount) === 0 ? undefined : (
					<Discount>{item.discount + '%'}</Discount>
				)}

				{Number(item.discount) === 0
					? price + '원'
					: realDiscountedPrice + '원'}
			</Price>
			{Number(item.discount) !== 0 ? (
				<NotDiscount>
					{price + '원'}
					<Line aria-hidden="true"></Line>
				</NotDiscount>
			) : undefined}
		</Item>
	);
}

const Item = styled.li`
	width: 25%;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const Title = styled.p`
	margin-top: 15px;
`;

const Price = styled.p`
	margin-top: 15px;
	font-weight: 700;
`;

const Discount = styled.span`
	margin-right: 10px;
	color: red;
`;

const NotDiscount = styled.p`
	position: relative;
	display: inline-block;
	margin-top: 10px;
	color: #ccc;
	font-size: 15px;
`;

const Line = styled.div`
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
	width: 100%;
	height: 1px;
	background-color: #ccc;
`;

const CartIcon = styled.i`
	position: absolute;
	bottom: 20px;
	right: 20px;
	padding: 12px;
	color: #fff;
	font-size: 20px;
	border-radius: 50%;
	background-color: rgba(0, 0, 0, 0.5);
`;

const ImgBox = styled.div`
	position: relative;
	height: 75%;
`;
