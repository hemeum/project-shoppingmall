import Banner from '../components/sub_banners/Banner';
import { SubBannerProps } from './DiscountBanner';

export default function DeliveryBanner({ sub }: SubBannerProps) {
	return <Banner sub={sub}></Banner>;
}
