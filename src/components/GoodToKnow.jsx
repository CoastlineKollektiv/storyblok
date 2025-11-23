import React from 'react';
import { Grid, Typography } from '@mui/material';
import Accordion from '@/common/Accordion';

const styles = {
  container: { py: '2rem' },
  heading: { fontSize: '2.5rem', fontWeight: 'bold' }
};

function GoodToKnow({ blok }) {
  const { heading, items } = blok;
  return (
    <Grid container justifyContent="center" spacing={2} sx={styles.container}>
      <Grid size={11}>
        <Typography variant="button" sx={styles.heading}>
          {heading}
        </Typography>
      </Grid>
      <Grid size={11}>
        <Accordion data={items} />
      </Grid>
    </Grid>
  );
}

export default GoodToKnow;
