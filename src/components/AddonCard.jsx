import { Grid, Typography } from '@mui/material';
import { StoryblokComponent } from '@storyblok/react';
import React from 'react';

const styles = {
  conatiner: { px: '4rem', py: '2rem' },
  title: { textTransform: 'uppercase' },
  info: { display: 'flex', alignItems: 'center' },
  infoIcon: { mr: '1rem' }
};

function AddonCard({ blok }) {
  const { title, infoSvg, note, addons } = blok;

  return (
    <Grid container sx={styles.conatiner} spacing={2}>
      <Grid size={12}>
        <Typography variant="h4" sx={styles.title}>
          {title}
        </Typography>
      </Grid>
      {addons.map(amenity => (
        <Grid
          size={{ xs: 12, md: 12 / addons.length }}
          key={amenity.id}
          container
          textAlign="center"
          alignItems="center"
          flexDirection="column"
        >
          <StoryblokComponent blok={amenity} />
        </Grid>
      ))}
      <Grid size={{ xs: 12, md: 4 }}>
        <Typography variant="body1" sx={styles.info}>
          {infoSvg.filename && (
            <Grid
              component="img"
              alt={infoSvg.alt}
              src={infoSvg.filename}
              sx={styles.infoIcon}
              width="fit-content"
              height="fit-content"
            />
          )}
          {note}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default AddonCard;
