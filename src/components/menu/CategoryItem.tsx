import styled from 'styled-components';

interface CategoryItemProps {
	key: number;
	ctg: string;
	icon: string;
	kinds: object[];
}

export default function CategoryItem({ ctg, icon, kinds }: CategoryItemProps) {
	console.log(kinds);
	return (
		<Item>
			<i className={icon}></i>
			{ctg}
		</Item>
	);
}

const Item = styled.li`
	padding: 10px 30px 10px 15px;
	cursor: pointer;

	:hover {
		color: red;
		background-color: #e2e2e2;
	}

	i {
		margin-right: 10px;
	}
`;
