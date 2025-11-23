import localFont from 'next/font/local';

// Font files can be colocated inside of `app`
export const normFont = localFont({
  src: [
    {
      path: './common/Assets/Fonts/SimplonNorm-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './common/Assets/Fonts/SimplonNorm-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './common/Assets/Fonts/SimplonNorm-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './common/Assets/Fonts/SimplonNorm-Light.ttf',
      weight: '300',
      style: 'normal'
    }
  ],
  variable: '--font-norm',
  display: 'swap'
});

export const monoFont = localFont({
  src: [
    {
      path: './common/Assets/Fonts/SimplonMono-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './common/Assets/Fonts/SimplonMono-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './common/Assets/Fonts/SimplonMono-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './common/Assets/Fonts/SimplonMono-Light.ttf',
      weight: '300',
      style: 'normal'
    }
  ],
  variable: '--font-mono',
  display: 'swap'
});

export const resolveRelations = [
  'page.header',
  'page.speed_dial',
  'page.footer',
  'mainFooter.surfInstructorLinks',
  'mainFooter.locationLinks',
  'mainFooter.links.link',
  'hero.booking',
  'campaign.to',
  'carouselCard.to',
  'campaign.to2',
  'flexibleTravel.to',
  'bungalowCard.to',
  'bungalowCard.to2',
  'header.menus',
  'banner.to',
  'discountCard.to',
  'imageCard.to',
  'imageCard.svg',
  'header.mainMenu',
  'header.accommodation',
  'header.surfcamps'
];
