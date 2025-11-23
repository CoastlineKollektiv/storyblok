import { Grid, Typography } from '@mui/material';
import React from 'react';

const styles = {
  svgWrap: color => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: '50%',
    bgcolor: color.color
  }),
  text: { mt: '1rem' },
  title2: { fontSize: '1rem' }
};

function Amenity({ blok }) {
  const { text, title, svg, bgcolor, price, title2 } = blok;

  return (
    <React.Fragment>
      <Grid sx={styles.svgWrap(bgcolor)}>
        <Grid
          component="img"
          alt={svg.alt}
          width={40}
          height={40}
          src={svg.filename}
        />
      </Grid>
      {title && (
        <Typography variant="h4" id="title">
          {title}
        </Typography>
      )}
      {title2 && (
        <Typography variant="h6" sx={styles.title2}>
          {title2}
        </Typography>
      )}
      <Typography variant="body" sx={styles.text}>
        {text}
      </Typography>
      {price && <Typography variant="h6">{price}</Typography>}
    </React.Fragment>
  );
}

export default Amenity;
