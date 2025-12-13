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

const styles = {
	container: {
		alignItems: 'flex-start',
		p: { xs: '2rem', md: '2rem 3rem' },
	},
	icon: { mr: '0.5rem' },
	contact: { mb: '1rem', fontWeight: 'bold' },
	link: { '& a': { color: 'common.black', fontWeight: '400' } },
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
				<Text sx={styles.contact}>
					<InfoIcon width={40} height={40} sx={styles.icon} />
					{infoTitle}
				</Text>
				{links.map((item) => {
					if (item.link.linktype === 'story')
						return (
							<Grid key={item._uid} sx={styles.link}>
								<Link href={item.link.cached_url}>{item.text}</Link>
							</Grid>
						);
					return (
						<Grid key={item._uid} sx={styles.link}>
							<Link href={item.link.cached_url} target="_blank">
								{item.text}
							</Link>
						</Grid>
					);
				})}
			</Grid>
			<Grid size={{ xs: 12, md: 4 }}>
				<Text sx={styles.contact}>
					<SurfInstructorIcon width={40} height={40} sx={styles.icon} />
					{surfInstructorTitle}
				</Text>
				{surfInstructorLinks.map((item) => (
					<Grid key={item.id} sx={styles.link}>
						<Link href={item.full_slug}>{item.name}</Link>
					</Grid>
				))}
			</Grid>
			<Grid size={{ xs: 12, md: 4 }}>
				<Text sx={styles.contact}>
					<LocationIcon width={40} height={40} sx={styles.icon} />
					{locationTitle}
				</Text>
				{locationLinks.map((item) => (
					<Grid key={item.id} sx={styles.link}>
						<Link href={item.full_slug}>{item.name}</Link>
					</Grid>
				))}
			</Grid>
			<Grid size={{ xs: 12, md: 4 }}>
				<Text sx={styles.contact}>
					<PaymentIcon width={40} height={40} sx={styles.icon} />
					{paymentTitle}
				</Text>
				<Text>{paymentGateway}</Text>
			</Grid>
			<Grid size={{ xs: 12, md: 4 }} offset={{ xs: 0, md: 4 }}>
				<Text sx={styles.contact}>
					<ContactIcon width={40} height={40} sx={styles.icon} />
					{contactTitle}
				</Text>
				<Content blok={{ text: contactText }} />
			</Grid>
		</Grid>
	);
}

export default MainFooter;
