import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

export default function SearchInput() {
	return (
		<MyPaper
			component="form"
			sx={{ display: 'flex', alignItems: 'center', width: 240 }}
			onClick={(e) => {
				e.currentTarget.style.backgroundColor = '#fff';
				e.currentTarget.style.border = '1px solid lightgray';
			}}
			onBlur={(e) => {
				e.currentTarget.style.backgroundColor = 'lightgray';
				e.currentTarget.style.border = 'none';
			}}
		>
			<MyInputBase
				sx={{ ml: 1.5, flex: 1 }}
				placeholder="검색어를 입력해주세요."
				inputProps={{ 'aria-label': '검색어를 입력해주세요.' }}
			/>
			<IconButton type="submit" sx={{ p: '10px' }} aria-label="검색">
				<SearchIcon />
			</IconButton>
		</MyPaper>
	);
}

const MyPaper = styled(Paper)<{ component: string }>`
	height: 35px;
	border-radius: 20px;
	box-shadow: none;
	background-color: lightgray;
`;

const MyInputBase = styled(InputBase)`
	font-size: 12px;
	font-weight: 700;
`;
