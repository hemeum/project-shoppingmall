import Image from 'next/image';
import styled from 'styled-components';

export default function HeaderTop() {
	return (
		<Box>
			<Image
				src="/imgs/logo.webp"
				width="103px"
				height="79px"
				alt="마켓컬리 로고"
			></Image>
		</Box>
	);
}

const Box = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		cursor: pointer;
	}
`;
