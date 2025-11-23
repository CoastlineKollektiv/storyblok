import { Grid, Typography } from '@mui/material';
import React from 'react';

const styles = {
  container: { mt: '2rem' }
};
function ArrivalType({ blok }) {
  const { svg, header, content } = blok;
  return (
    <Grid container sx={styles.container}>
      <Grid size={2}>
        {svg.filename && (
          <Grid
            component="img"
            alt={svg.alt}
            src={svg.filename}
            width="fit-content"
            height="fit-content"
          />
        )}
      </Grid>
      <Grid size={10}>
        <Typography component="div" variant="h6">
          {header}
        </Typography>
        <Typography component="div" variant="body">
          {content}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ArrivalType;
