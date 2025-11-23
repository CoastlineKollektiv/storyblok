'use client';

import { getStoryblokApi } from '@/lib/storyblok';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { monoFont, normFont } from '@/app/constants';
import theme from '@/app/theme';

export default function StoryblokProvider({ children }) {
	getStoryblokApi();
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<ThemeProvider theme={theme}>
				<div className={`${normFont.variable} ${monoFont.variable}`}>
					<CssBaseline />
					{children}
				</div>
			</ThemeProvider>
		</LocalizationProvider>
	);
}
