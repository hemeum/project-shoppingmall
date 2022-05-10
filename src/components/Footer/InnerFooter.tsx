import Container from '@mui/material/Container';
import Call from './Call';
import Company from './Company';
import FootLink from './FootLink';
import Desc from './Desc';

import styled from 'styled-components';

export default function InnerFooter() {
	return (
		<Con maxWidth="lg">
			<div>
				<Call></Call>
				<Company></Company>
			</div>
			<FootLink></FootLink>
			<Desc></Desc>
		</Con>
	);
}

const Con = styled(Container)`
	padding: 20px 24px;
`;
