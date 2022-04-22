import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Nav from '../src/global/Nav';

const Home: NextPage = () => {
	return (
		<Container maxWidth="lg">
			<Nav></Nav>
		</Container>
	);
};

export default Home;
