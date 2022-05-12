import Banner from '../../components/sub_banner/Banner';
import { SubBannerProps } from './DiscountBanner';

export default function DeliveryBanner({ sub }: SubBannerProps) {
	return <Banner sub={sub}></Banner>;
}
