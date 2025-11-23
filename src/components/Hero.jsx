import { Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { LocationIcon } from '@/common/svgs';
import { Button } from '@/common';

const styles = {
  container: image => ({
    backgroundImage: `url( ${image})`,
    height: '100vh',
    backgroundSize: 'cover',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flexDirection: 'column'
  }),
  discountValue: { fontSize: '2.5rem', lineHeight: 1 },
  title: {
    fontSize: { xs: '40px', md: '60px' },
    fontWeight: 'bold',
    letterSpacing: 10,
    ml: { xs: '1rem', md: '3rem' },
    width: { xs: '100%', md: '60%' },
    textTransform: 'uppercase',
    color: 'common.white'
  },
  label: { textTransform: 'uppercase' },
  btn: {
    bgcolor: 'common.black',
    color: 'common.white',
    fontWeight: 'bold',
    ml: { xs: '1rem', md: '3rem' },
    mt: '4rem',
    px: '8rem'
  },
  location: {
    color: 'common.white',
    margin: 0,
    ml: { xs: '1rem', md: '3rem' },
    fontSize: '1.25rem'
  },
  caption: {
    fontSize: '2rem',
    ml: { xs: '1rem', md: '3rem' },
    color: 'common.white'
  },
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
    top: 150,
    right: { xs: 50, md: 80 }
  }),
  footerTitle: { mb: '6rem' },
  icon: { color: 'common.white', m: 0 },
  bottomSpace: { mb: '8rem' }
};

function Hero({ blok }) {
  const { bgImage } = blok;
  return (
    <Grid
      container
      textAlign="center"
      sx={styles.container(bgImage.filename)}
      spacing={2}
    >
      <Grid size={{ xs: 11, sm: 10, md: 8, lg: 6 }} textAlign="left">
        {blok.location && (
          <Typography variant="h6" sx={styles.location}>
            <LocationIcon sx={styles.icon} /> {blok.location}
          </Typography>
        )}
        <Typography
          variant="h1"
          sx={[styles.title, !blok.booking && styles.footerTitle]}
        >
          {blok.title}
        </Typography>
        {blok.caption && (
          <Typography variant="h4" sx={styles.caption}>
            {blok.caption}
          </Typography>
        )}
        {blok.booking && (
          <Button
            variant="contained"
            sx={[
              styles.btn,
              (!blok.banner || !blok.caption) && styles.bottomSpace
            ]}
          >
            <Link href={blok.booking.full_slug}>{blok.booking.name}</Link>
          </Button>
        )}
      </Grid>
      {blok.discount && (
        <Grid sx={styles.discount(blok.themeColor.color)}>
          <Typography variant="button" sx={styles.discountValue}>
            {blok.discount}%
          </Typography>
          <Typography variant="h6" sx={styles.label}>
            {blok.discountLabel}
          </Typography>
        </Grid>
      )}
      {blok.banner && (
        <Grid
          size={12}
          sx={{
            bgcolor: blok.themeColor.color,
            height: 60,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography variant="body1">{blok.banner}</Typography>
        </Grid>
      )}
    </Grid>
  );
}

export default Hero;
