import Container from '@mui/material/Container';
import CallCenter from './CallCenter';
import Company from './Company';
import FootLink from './FootLink';
import Desc from './Desc';

import styled from 'styled-components';

export default function InnerFooter() {
	return (
		<Con maxWidth="lg">
			<Box>
				<CallCenter></CallCenter>
				<Company></Company>
			</Box>
			<FootLink></FootLink>
			<Desc></Desc>
		</Con>
	);
}

const Con = styled(Container)`
	padding: 20px 24px;
`;

const Box = styled.div`
	display: flex;
	gap: 50px;
`;
