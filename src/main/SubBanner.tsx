import Banner from '../components/sub_banner/Banner';

export interface SubBannerProps {
	sub: {
		id: string;
		imgPath: string;
		alt: string;
	};
}

export default function SubBanner({ sub }: SubBannerProps) {
	return <Banner sub={sub}></Banner>;
}
