import { Grid, Typography } from '@mui/material';
import { StoryblokComponent } from '@storyblok/react';

const styles = {
  container: { p: '2rem' },
  title: { mb: '2rem' }
};

function Amenities({ blok }) {
  const { title, note, amenities } = blok;
  return (
    <Grid container sx={styles.container} spacing={2}>
      {title && (
        <Grid size={12}>
          <Typography variant="h2" sx={styles.title}>
            {title}
          </Typography>
        </Grid>
      )}
      {amenities.map(amenity => (
        <Grid
          size={{ xs: 4, md: 12 / amenities.length }}
          key={amenity._uid}
          container
          textAlign="center"
          alignItems="center"
          flexDirection="column"
        >
          <StoryblokComponent blok={amenity} />
        </Grid>
      ))}
      <Grid size={{ xs: 10, md: 4 }}>
        <Typography variant="caption">{note}</Typography>
      </Grid>
    </Grid>
  );
}

export default Amenities;
