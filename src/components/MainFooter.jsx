'use client';
import React from 'react';
import { Grid } from '@mui/material';
import Link from 'next/link';
import {
	ContactIcon,
	InfoIcon,
	LocationIcon,
	PaymentIcon,
	SurfInstructorIcon,
} from '@/common/svgs';
import Content from './Content';
import { Text } from '@/common';
import { StoryblokRichText } from '@storyblok/react';

const styles = {
	container: {
		alignItems: 'flex-start',
		p: { xs: '2rem', md: '2rem 4rem' },
	},
	icon: { mr: '0.5rem' },
	contact: { mb: '1rem' },
	link: { '& a': { color: 'common.black' } },
};

function MainFooter({ blok }) {
	const {
		contactTitle,
		contactText,
		paymentTitle,
		paymentGateway,
		infoTitle,
		locationTitle,
		surfInstructorTitle,
		locationLinks,
		links,
		surfInstructorLinks,
	} = blok;
	return (
		<Grid container sx={styles.container} spacing={2}>
			<Grid size={{ xs: 12, md: 4 }}>
				<Text type={'Title'} sx={styles.contact} fontType="primary" bold>
					<InfoIcon width={40} height={40} sx={styles.icon} />
					{infoTitle}
				</Text>
				{links.map((item) => {
					if (item.link.linktype === 'story')
						return (
							<Grid key={item._uid} sx={styles.link}>
								<Link href={item.link.cached_url}>
									<Text fontType="primary" light>
										{item.text}
									</Text>
								</Link>
							</Grid>
						);
					return (
						<Grid key={item._uid} sx={styles.link}>
							<Link href={item.link.cached_url} target="_blank">
								<Text fontType="primary" light>
									{item.text}
								</Text>
							</Link>
						</Grid>
					);
				})}
			</Grid>
			<Grid size={{ xs: 12, md: 4 }}>
				<Text type={'Title'} sx={styles.contact} fontType="primary" bold>
					<SurfInstructorIcon width={40} height={40} sx={styles.icon} />
					{surfInstructorTitle}
				</Text>
				{surfInstructorLinks.map((item) => (
					<Grid key={item.id} sx={styles.link}>
						<Link href={item.full_slug}>
							<Text fontType="primary" light>
								{item.name}
							</Text>
						</Link>
					</Grid>
				))}
			</Grid>
			<Grid size={{ xs: 12, md: 4 }}>
				<Text type={'Title'} sx={styles.contact} fontType="primary" bold>
					<LocationIcon width={40} height={40} sx={styles.icon} />
					{locationTitle}
				</Text>
				{locationLinks.map((item) => (
					<Grid key={item.id} sx={styles.link}>
						<Link href={item.full_slug}>
							<Text fontType="primary" light>
								{item.name}
							</Text>
						</Link>
					</Grid>
				))}
			</Grid>
			<Grid size={{ xs: 12, md: 4 }}>
				<Text type={'Title'} sx={styles.contact} fontType="primary" bold>
					<PaymentIcon width={40} height={40} sx={styles.icon} />
					{paymentTitle}
				</Text>
				<Text light>{paymentGateway}</Text>
			</Grid>
			<Grid size={{ xs: 12, md: 4 }} offset={{ xs: 0, md: 4 }}>
				<Text type={'Title'} sx={styles.contact} fontType="primary" bold>
					<ContactIcon width={40} height={40} sx={styles.icon} />
					{contactTitle}
				</Text>
				{contactText.split('<br/>').map((line) => (
					<Text type={'Text'} light>
						{line.replace('\n', '')}
					</Text>
				))}
			</Grid>
		</Grid>
	);
}

export default MainFooter;
