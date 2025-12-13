import { useMemo } from 'react';
import CommonTabs from '@/common/Tabs';
import { StoryblokComponent } from '@storyblok/react';
import { Grid, Paper } from '@mui/material';

const Tabs = ({ blok }) => {
	const { blocks } = blok;

	const tabs = useMemo(
		() =>
			blocks.map((tab) => ({
				id: tab._uid,
				value: tab._uid,
				label: tab.label,
				content: (
					<Grid container size={12}>
						<StoryblokComponent blok={tab} />
					</Grid>
				),
			})),
		[blocks],
	);

	return (
		<Paper elevation={4} sx={{ m: { xs: '2rem', md: '4rem' } }}>
			<CommonTabs tabs={tabs} />
		</Paper>
	);
};

export default Tabs;
