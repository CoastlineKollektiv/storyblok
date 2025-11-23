import { renderRichText } from '@storyblok/react';
import { Grid, Typography } from '@mui/material';

const styles = {
  container: { p: '2rem' },
  title: { my: '2rem', textTransform: 'uppercase' }
};

function MapCard({ blok }) {
  const { map, title, content } = blok;
  const renderedRichText = renderRichText(content);
  return (
    <Grid container justifyContent="space-around" sx={styles.container}>
      <Grid size={{ xs: 12, md: 5 }}>
        <Grid component="img" alt={map.alt} src={map.filename} width="100%" />
      </Grid>
      <Grid size={{ xs: 12, md: 5 }}>
        <Typography variant="h3" sx={styles.title}>
          {title}
        </Typography>
        <Grid dangerouslySetInnerHTML={{ __html: renderedRichText }} />
      </Grid>
    </Grid>
  );
}

export default MapCard;
