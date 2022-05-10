import InnerFooter from '../components/Footer/InnerFooter';

import styled from 'styled-components';

export default function Footer() {
	return (
		<>
			<Hr></Hr>
			<InnerFooter></InnerFooter>
			<Hr></Hr>
		</>
	);
}

const Hr = styled.hr`
	height: 1px;
	border: none;
	background-color: #e2e2e2;
`;
