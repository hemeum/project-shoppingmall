import Room from '@mui/icons-material/Room';
import Favorite from '@mui/icons-material/Favorite';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

import styled from 'styled-components';

export default function IconMenu() {
	return (
		<IconBox>
			<Room fontSize="large"></Room>
			<Favorite fontSize="large"></Favorite>
			<ShoppingCart fontSize="large"></ShoppingCart>
		</IconBox>
	);
}

const IconBox = styled.div`
	display: flex;
	gap: 15px;
`;
