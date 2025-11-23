import { Grid, Typography } from '@mui/material';
import { PhoneIcon, MailIcon } from '../common/svgs';

const styles = {
  container: { mt: '2rem' },
  image: { borderRadius: '50%' },
  iconWrap: { display: 'flex', alignItems: 'center', mt: '.5rem' },
  icon: { mr: '1rem' }
};

function Member({ blok }) {
  return (
    <Grid container sx={styles.container} textAlign="center" spacing={2}>
      <Grid size={{ xs: 3, md: 4 }}>
        <Grid
          component="img"
          sx={styles.image}
          src={blok.picture.filename}
          height={{ xs: 80, md: 110 }}
          width={{ xs: 80, md: 110 }}
        />
      </Grid>
      <Grid size={{ xs: 9, md: 8 }} textAlign="left">
        <Typography variant="button">{blok.name}</Typography>
        <Typography variant="body2">{blok.role}</Typography>
        {blok.mobile && (
          <Typography sx={styles.iconWrap} variant="body2">
            <PhoneIcon sx={styles.icon} />
            {blok.mobile}
          </Typography>
        )}
        {blok.mail && (
          <Typography sx={styles.iconWrap} variant="body2">
            <MailIcon sx={styles.icon} />
            {blok.mail}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}

export default Member;
