import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { Grid } from '@mui/material';

function Page({ blok }) {
  return (
    <Grid container {...storyblokEditable(blok)}>
      <Grid size={12}>
        <StoryblokComponent blok={blok.header.content} />
      </Grid>
      <Grid size={12}>
        {blok.body.map(nestedBlok => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </Grid>
      <Grid size={12}>
        <StoryblokComponent blok={blok.footer.content} />
      </Grid>
      <StoryblokComponent blok={blok.speed_dial.content} />
    </Grid>
  );
}

export default Page;
