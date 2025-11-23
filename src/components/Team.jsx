import { StoryblokComponent, renderRichText } from '@storyblok/react';
import { Grid, Typography } from '@mui/material';

const styles = {
  container: {
    bgcolor: '#f3f1e9',
    p: { xs: '1rem', md: '1rem 2rem' }
  }
};

function Team({ blok }) {
  const renderedRichText = renderRichText(blok.description);
  return (
    <Grid container sx={styles.container}>
      <Grid size={12}>
        <Typography variant="h4">{blok.header}</Typography>
      </Grid>
      <Grid size={7}>
        <Grid dangerouslySetInnerHTML={{ __html: renderedRichText }} />
      </Grid>
      {blok.members.map(member => (
        <Grid key={member._uid} size={{ xs: 12, sm: 6 }}>
          <StoryblokComponent blok={member} height={200} width="100%" />
        </Grid>
      ))}
    </Grid>
  );
}

export default Team;
