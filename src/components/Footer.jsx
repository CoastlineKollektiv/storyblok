'use client';
import React from 'react';
import { StoryblokComponent } from '@storyblok/react';

function Footer({ blok }) {
	return (
		<React.Fragment>
			{blok.blocks.map((nestedBlok) => (
				<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
			))}
		</React.Fragment>
	);
}

export default Footer;
