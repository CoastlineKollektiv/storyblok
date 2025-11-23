import { Grid, Typography } from '@mui/material';
import { InstagramIcon } from '@/common/svgs';

const styles = {
  container: { alignItems: 'center' },
  icon: { mr: '1rem' },
  header: { fontWeight: 'bold' }
};

function InstaFeed({ blok }) {
  return (
    <Grid container sx={styles.container}>
      <Grid
        size={{ xs: 11, md: 10 }}
        offset={{ xs: 1, md: 2 }}
        sx={{ py: '1rem' }}
      >
        <InstagramIcon sx={styles.icon} />
        <Typography variant="button" sx={styles.header}>
          {blok.header}
        </Typography>
      </Grid>
      <Grid size={12} container>
        {blok.images.map(image => (
          <Grid
            size="grow"
            key={image.id}
            component="img"
            alt={image.alt}
            src={image.filename}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default InstaFeed;
