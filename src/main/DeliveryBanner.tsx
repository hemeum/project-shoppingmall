import data from '../../data.json';
import Banner from '../components/sub_banners/Banner';

export default function DiscountBanner() {
	const sub = data.banners.sub[1];
	return <Banner sub={sub}></Banner>;
}
