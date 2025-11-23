import React from 'react';
import Head from 'next/head';
import { getStoryblokApi, StoryblokComponent } from '@storyblok/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import theme from '../theme';
import { monoFont, normFont, resolveRelations } from '../constants';

export default function Home({ story }) {
  return (
    <React.Fragment>
      <Head>
        <title>Coastline Kollektive</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <div className={`${normFont.variable} ${monoFont.variable}`}>
            <CssBaseline />
            <StoryblokComponent blok={story.content} />
          </div>
        </ThemeProvider>
      </LocalizationProvider>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const slug = 'home';

  const sbParams = {
    version: 'draft', // or 'published'
    resolve_relations: resolveRelations
  };

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false
    }
    // revalidate: 3600
  };
}
