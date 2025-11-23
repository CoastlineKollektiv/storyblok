import { renderRichText } from '@storyblok/react';
import { Grid } from '@mui/material';

const styles = {
  mainPageContent: { p: '4rem' }
};

function Content({ blok }) {
  const renderedRichText = renderRichText(blok.text);
  return (
    <Grid
      sx={[blok.mainPageContent && styles.mainPageContent]}
      dangerouslySetInnerHTML={{ __html: renderedRichText }}
    />
  );
}

export default Content;
