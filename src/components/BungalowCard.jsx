import { Grid, Paper, Typography } from '@mui/material';
import { renderRichText } from '@storyblok/react';
import React from 'react';
import Link from 'next/link';
import { Button, Carousel } from '@/common';

const styles = {
  container: { pb: '3rem', pt: '4rem', mx: '2rem', mb: '2rem' },
  carouselWrap: { position: 'relative' },
  label: { lineHeight: 1, textTransform: 'uppercase' },
  discountValue: { fontSize: '2.5rem', lineHeight: 1 },
  btn: {
    bgcolor: 'common.black',
    color: 'common.white',
    fontWeight: 'bold',
    width: '100%',
    px: '3rem'
  },
  btn2: {
    bgcolor: 'common.white',
    color: 'common.black',
    fontWeight: 'bold',
    width: '100%',
    px: '3rem',
    ml: '.5rem',
    '& a': {
      color: 'common.black'
    }
  },
  bestSeller: {
    position: 'absolute',
    border: '1px solid',
    px: '1rem',
    py: '0.3125rem',
    display: 'flex',
    alignItems: 'center',
    top: 10,
    left: 10,
    bgcolor: 'common.white'
  },
  text: { ml: '1rem' },
  discount: color => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    bgcolor: color,
    width: '8rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    overflowWrap: 'break-word',
    height: '8rem',
    position: 'absolute',
    borderRadius: '50%',
    top: -50,
    left: -50,
    zIndex: 10
  }),
  wrap: { ml: '1rem' },
  btnWrap: { mt: '1rem', ml: '1rem' }
};

function BungalowCard({ blok }) {
  const {
    content,
    images,
    to,
    to2,
    alternate,
    isBestSeller,
    bestSellerText,
    svg
  } = blok;
  const renderedRichText = renderRichText(content);

  const slides = images.map(image => ({
    key: image.id,
    content: (
      <Grid
        key={image.id}
        component="img"
        alt={image.alt}
        width="100%"
        height={430}
        src={image.filename}
      />
    )
  }));

  return (
    <Grid
      container
      component={Paper}
      elevation={4}
      justifyContent="space-around"
      flexDirection={alternate ? 'row' : 'row-reverse'}
      sx={styles.container}
    >
      <Grid size={{ xs: 12, md: 5 }} sx={styles.carouselWrap}>
        <Carousel
          key={blok.id}
          slides={slides}
          slidesPerView={1}
          isCircular
          isAutoPlay
        />
        {isBestSeller && (
          <Grid sx={styles.bestSeller}>
            <Grid
              component="img"
              alt={svg.alt}
              width="fit-content"
              height="fit-content"
              src={svg.filename}
            />
            <Typography variant="button" sx={styles.text}>
              {bestSellerText}
            </Typography>
          </Grid>
        )}
      </Grid>
      <Grid size={{ xs: 12, md: 5 }}>
        <Grid
          sx={styles.wrap}
          dangerouslySetInnerHTML={{ __html: renderedRichText }}
        />
        <Grid container sx={styles.btnWrap}>
          <Grid size={5.5}>
            {to && (
              <Button variant="contained" sx={[styles.btn]}>
                <Link href={to.full_slug}>{to.name}</Link>
              </Button>
            )}
          </Grid>
          <Grid size={5.5}>
            {to2 && (
              <Button variant="outlined" sx={[styles.btn2]}>
                <Link href={to2.full_slug}>{to2.name}</Link>
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BungalowCard;
