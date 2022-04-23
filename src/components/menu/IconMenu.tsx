import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import styled from 'styled-components';

export default function IconMenu() {
	return (
		<IconBox>
			<RoomOutlinedIcon fontSize="large"></RoomOutlinedIcon>
			<FavoriteBorderOutlinedIcon fontSize="large"></FavoriteBorderOutlinedIcon>
			<ShoppingCartOutlinedIcon fontSize="large"></ShoppingCartOutlinedIcon>
		</IconBox>
	);
}

const IconBox = styled.div`
	display: flex;
	gap: 30px;
	> * {
		cursor: pointer;
		:hover {
			color: red;
		}
	}
`;
