import { Grid, Typography } from '@mui/material';

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    mt: '1rem'
  },
  header: { fontWeight: 'bold', fontSize: '1.5rem' },
  caption: { fontSiz1: '1.25rem', my: '1rem' },
  image: { verticalAlign: 'bottom' }
};

function Certificates({ blok }) {
  const { title, caption, image } = blok;
  return (
    <Grid container sx={styles.container}>
      <Grid size={7}>
        <Typography variant="button" component="div" sx={styles.header}>
          {title}
        </Typography>
        <Typography variant="body2" sx={styles.caption}>
          {caption}
        </Typography>
      </Grid>
      <Grid size={12}>
        <Grid
          component="img"
          width="100%"
          sx={styles.image}
          alt={image.alt}
          src={image.filename}
        />
      </Grid>
    </Grid>
  );
}

export default Certificates;
