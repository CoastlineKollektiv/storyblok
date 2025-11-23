import React from 'react';
import { Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { Button } from '@/common';

const styles = {
  container: color => ({ bgcolor: color.color, px: '4rem', py: '2rem' }),
  text: { color: 'common.white', fontSize: '2.5rem', lineHeight: 1 },
  btn: { mt: '1rem' }
};

function DiscountCard({ blok }) {
  const { text, to, bgcolor } = blok;
  return (
    <Grid
      container
      sx={styles.container(bgcolor)}
      alignItems="center"
      textAlign="center"
      flexDirection="column"
    >
      <Grid size={{ xs: 11, md: 7 }}>
        <Typography variant="button" sx={styles.text}>
          {text}
        </Typography>
      </Grid>
      {to && (
        <Button variant="contained" sx={[styles.btn]}>
          <Link href={blok.to.full_slug}>{blok.to.name}</Link>
        </Button>
      )}
    </Grid>
  );
}

export default DiscountCard;
