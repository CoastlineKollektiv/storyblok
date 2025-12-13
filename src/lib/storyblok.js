import { apiPlugin, storyblokInit } from '@storyblok/react';
import Page from '@/components/Page';
import Team from '@/components/Team';
import Member from '@/components/Member';
import Footer from '@/components/Footer';
import Content from '@/components/Content';
import SpeedDial from '@/components/SpeedDial';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InstaFeed from '@/components/InstaFeed';
import Subscribe from '@/components/Subscribe';
import Certificates from '@/components/Certificates';
import GoodToKnow from '@/components/GoodToKnow';
import MainFooter from '@/components/MainFooter';
import Campaign from '@/components/Campaign';
import CarouselCards from '@/components/CarouselCards';
import About from '@/components/About';
import Banner from '@/components/Banner';
import BungalowCard from '@/components/BungalowCard';
import MapCard from '@/components/MapCard';
import ImageCard from '@/components/ImageCard';
import Amenities from '@/components/Amenities';
import Amenity from '@/components/Amenity';
import Tabs from '@/components/Tabs';
import SportsCard from '@/components/SportsCard';
import AddonCard from '@/components/AddonCard';
import DiscountCard from '@/components/DiscountCard';
import Arrival from '@/components/Arrival';
import ArrivalType from '@/components/ArrivalType';
import FlexibleTravel from '@/components/FlexibleTravel';
import TabTemplate1 from '@/components/TabTemplate1';
import SurfTeam from '@/components/SurfTeam';
import TabTemplate2 from '@/components/TabTemplate2';
import TabTemplate3 from '@/components/TabTemplate3';

const components = {
	page: Page,
	team: Team,
	member: Member,
	footer: Footer,
	header: Header,
	content: Content,
	amenities: Amenities,
	amenity: Amenity,
	discountCard: DiscountCard,
	arrival: Arrival,
	flexibleTravel: FlexibleTravel,
	'speed-dial': SpeedDial,
	arrivalType: ArrivalType,
	addOnCard: AddonCard,
	surfTeam: SurfTeam,
	sportsCard: SportsCard,
	tabs: Tabs,
	tabTemplate1: TabTemplate1,
	tabTemplate2: TabTemplate2,
	tabTemplate3: TabTemplate3,
	imageCard: ImageCard,
	mapCard: MapCard,
	hero: Hero,
	instaFeed: InstaFeed,
	subscribe: Subscribe,
	campaign: Campaign,
	certificates: Certificates,
	carouselCard: CarouselCards,
	bungalowCard: BungalowCard,
	goodToKnow: GoodToKnow,
	banner: Banner,
	about: About,
	mainFooter: MainFooter,
};

export const getStoryblokApi = storyblokInit({
	accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
	use: [apiPlugin],
	components,
	apiOptions: {
		/** Set the correct region for your space. Learn more: https://www.storyblok.com/docs/packages/storyblok-js#example-region-parameter */
		region: 'eu',
		endpoint: process.env.STORYBLOK_API_BASE_URL,
	},
});
