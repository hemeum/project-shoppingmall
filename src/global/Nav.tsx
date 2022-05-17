import UserMenu from '../components/menu/UserMenu';
import HeaderTop from '../components/header/HeaderTop';
import GlobalMenu from '../components/menu/GlobalMenu';
import SearchInput from '../components/search/SearchInput';
import IconMenu from '../components/menu/IconMenu';

import styled from 'styled-components';

export default function Nav() {
	return (
		<>
			<UserMenu></UserMenu>
			<HeaderTop></HeaderTop>
			<HeaderBottom>
				<GlobalMenu></GlobalMenu>
				<SearchInput></SearchInput>
				<IconMenu></IconMenu>
			</HeaderBottom>
		</>
	);
}

const HeaderBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;
`;
