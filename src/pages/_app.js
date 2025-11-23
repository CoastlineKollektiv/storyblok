'use client';

import { storyblokInit, apiPlugin } from '@storyblok/react';
import Page from '../components/Page';
import Team from '../components/Team';
import Member from '../components/Member';
import Footer from '../components/Footer';
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
import SportsCard from '@/components/SportsCard';
import AddonCard from '@/components/AddonCard';
import DiscountCard from '@/components/DiscountCard';
import Arrival from '@/components/Arrival';
import ArrivalType from '@/components/ArrivalType';
import FlexibleTravel from '@/components/FlexibleTravel';

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
  sportsCard: SportsCard,
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
  mainFooter: MainFooter
};

storyblokInit({
  accessToken: 'a4YWytrfrIQNts22wPcP5gtt',
  use: [apiPlugin],
  // apiOptions: {
  //   //   region: "us" or "cn", // you need to specify the region
  //   // },
  components
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
