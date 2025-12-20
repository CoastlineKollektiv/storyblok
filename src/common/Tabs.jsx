'use client';
import React, { useState, useCallback, useMemo } from 'react';
import {
	Grid,
	AppBar,
	Slide,
	Tabs as MuiTabs,
	Tab,
	tabsClasses,
} from '@mui/material';
import Text from './Text';

const styles = {
	tabs: {
		minHeight: '48px',
		'& .Mui-selected': { color: 'common.black' },
		'& .MuiTabs-indicator': { height: 3, bgcolor: 'transparent' },
	},
	selectedTab: { color: 'common.black' },
	appBar: { background: 'common.white' },
	centered: {
		flex: 0,
		borderBottom: 'none',
		textWrap: 'nowrap',
	},
	tabPanelContent: { justifyContent: 'center' },
	tabsBordered: {
		borderBottom: '1px solid lightgray',
	},
	tab: {
		opacity: 1,
		p: '3 8px',
		minHeight: '48px',
		minWidth: 'fit-content',
	},
	tabTitle: { color: 'colors.disabled' },
};

function Tabs(props) {
	const {
		tabs,
		isAppBar = false,
		variant = 'fullWidth',
		sx = {},
		centered = false,
		defaultValue = tabs[0]?.value || 0,
		onChange = null,
	} = props;

	const [value, setValue] = useState(defaultValue);

	const filterTabs = useMemo(() => tabs.filter(Boolean), [tabs]);

	const handleChange = useCallback(
		(e, newValue) => {
			setValue(newValue);
			if (onChange) {
				onChange(newValue);
			}
		},
		[onChange],
	);

	const MuiTabsComponent = useMemo(() => {
		return (
			<MuiTabs
				value={value}
				centered={centered}
				sx={[
					styles.tabs,
					centered && styles.tabsCentered,
					variant === 'scrollable' && {
						[`& .${tabsClasses.scrollButtons}`]: {
							'&.Mui-disabled': { opacity: 0.3 },
						},
					},
					sx,
				]}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="inherit"
				variant={variant}
				// {...(variant === 'scrollable' && {
				// 	allowScrollButtonsMobile: variant === 'scrollable',
				// })}
			>
				{filterTabs.map((item, index) => {
					const inValue = item.value === value || item.value === index;
					return (
						<Tab
							sx={[styles.tab, !inValue && styles.tabsBordered]}
							key={item.id}
							value={item.value || index}
							disableFocusRipple
							disableRipple
							disabled={item.disabled}
							label={
								<Text
									bold
									type="Title"
									sx={[styles.tabTitle, inValue && styles.selectedTab]}
								>
									{item.label}
								</Text>
							}
							icon={item.icon}
							iconPosition={item.iconPosition || 'start'}
						/>
					);
				})}
			</MuiTabs>
		);
	}, [value, centered, variant, sx, handleChange, filterTabs]);

	const TabsPanelComponent = useMemo(() => {
		return (
			<React.Fragment>
				{filterTabs.map((item, index) => {
					const inValue = item.value === value || item.value === index;
					return (
						<Slide direction="left" key={item.id} in={inValue} mountOnEnter>
							<Grid
								container
								role="tabpanel"
								sx={[styles.tabPanelContent, inValue && item.tabStyles]}
								aria-hidden={!inValue}
							>
								<Grid size={12}>{inValue && item.content}</Grid>
							</Grid>
						</Slide>
					);
				})}
			</React.Fragment>
		);
	}, [filterTabs, value]);

	return (
		<React.Fragment>
			{isAppBar ? (
				<AppBar position="static" sx={[styles.appBar, styles.elevation(1)]}>
					{MuiTabsComponent}
				</AppBar>
			) : (
				MuiTabsComponent
			)}
			{TabsPanelComponent}
		</React.Fragment>
	);
}

export default Tabs;
