import InnerFooter from '../components/footer/InnerFooter';
import Desc from '../components/footer/Desc';

import styled from 'styled-components';

export default function Footer() {
	return (
		<>
			<Hr></Hr>
			<InnerFooter></InnerFooter>
			<Desc></Desc>
		</>
	);
}

const Hr = styled.hr`
	height: 1px;
	border: none;
	background-color: #e2e2e2;
`;
