import React from 'react';
import Head from 'next/head';
import { getStoryblokApi, StoryblokComponent } from '@storyblok/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { monoFont, normFont, resolveRelations } from '../constants';
import theme from '../theme';

export default function Page({ story }) {
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

export async function getStaticProps({ params }) {
  const slug = params.slug ? params.slug.join('/') : 'home';

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

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get('cdn/links/', {
    version: 'draft',
    resolve_relations: resolveRelations
  });

  const paths = [];
  Object.keys(data.links).forEach(linkKey => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
      return;
    }

    const { slug } = data.links[linkKey];
    const splittedSlug = slug.split('/');

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths,
    fallback: false
  };
}
