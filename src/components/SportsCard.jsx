import { Grid, Typography } from '@mui/material';
import { renderRichText, StoryblokComponent } from '@storyblok/react';
import React from 'react';
import { Carousel } from '@/common';

const styles = {
  container: color => ({
    pb: '2rem',
    pt: '5rem',
    px: '2rem',
    bgcolor: color.color
  }),
  title: { lineHeight: 1, textTransform: 'uppercase', mb: '3rem' }
};

function SportsCard({ blok }) {
  const { content, title, images, amenities, bgcolor } = blok;

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
      spacing={2}
      justifyContent="space-around"
      sx={styles.container(bgcolor)}
    >
      <Grid size={{ xs: 12, md: 5.5 }}>
        <Typography variant="h4" sx={styles.title}>
          {title}
        </Typography>
        <Grid dangerouslySetInnerHTML={{ __html: renderedRichText }} />
      </Grid>
      <Grid size={{ xs: 12, md: 5.5 }}>
        <Carousel
          key={blok.id}
          slides={slides}
          slidesPerView={1}
          isCircular
          isAutoPlay
        />
      </Grid>
      {amenities.map(amenity => (
        <Grid
          size={12 / amenities.length}
          key={amenity.id}
          container
          textAlign="center"
          alignItems="center"
          flexDirection="column"
        >
          <StoryblokComponent blok={amenity} />
        </Grid>
      ))}
    </Grid>
  );
}

export default SportsCard;
