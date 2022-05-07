/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';

interface ListProps {
	items: { id: string; alt: string; imgPath: string }[];
}

export default function List({ items }: ListProps) {
	return (
		<>
			<Instas>
				{items.map((insta) => {
					return (
						<InstaItem key={Number(insta.id)}>
							<img src={insta.imgPath} alt={insta.alt}></img>
						</InstaItem>
					);
				})}
			</Instas>
		</>
	);
}

const Instas = styled.ul`
	display: flex;
	width: 100%;
	height: 200px;
`;

const InstaItem = styled.li`
	width: 20%;
	height: 100%;
	cursor: pointer;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;