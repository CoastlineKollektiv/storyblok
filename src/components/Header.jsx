'use client';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import {
	Grid,
	Toolbar,
	MenuItem,
	Menu,
	Drawer,
	Divider,
	List,
	ListItemButton,
	ListItemText,
	Collapse,
} from '@mui/material';
import Link from 'next/link';
import { Button, IconButton } from '@/common';
import { useRouter } from 'next/navigation';
import { ExpandMoreIcon, MenuIcon } from '@/common/svgs';

const styles = {
	logo: { cursor: 'pointer' },
	smallScreenlogo: { my: '2rem' },
	listText: { textTransform: 'uppercase' },
	btn: {
		cursor: 'pointer',
		color: 'common.black',
		fontWeight: 'bold',
		overflowWrap: 'break-word',
		textTransform: 'uppercase',
		fontSize: '0.875rem',
		'& a': { color: 'common.black' },
		display: { xs: 'none', sm: 'block' },
	},
	scroll: { bgcolor: 'common.white' },
};

function ElevationScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: '0',
		target: window ? window() : undefined,
	});
	const customProps = {
		elevation: trigger ? 4 : 0,
		sx: trigger ? styles.scroll : { bgcolor: 'transparent' },
	};

	const ele = children ? React.cloneElement(children, customProps) : null;

	return ele;
}

const drawerWidth = 240;

export default function ElevateAppBar(props) {
	const { blok } = props;
	const { logo, mainMenu, menus, accommodation, surfcamps } = blok;
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [menuOptions, setMenuOptions] = React.useState([]);
	const [collapseOpen, setCollapseOpen] = React.useState(false);
	const [collapseId, setCollapseId] = React.useState(null);
	const open = Boolean(anchorEl);
	const router = useRouter();

	const navItems = [
		{
			key: 1,
			label: 'Surf Camps',
			collapse: true,
			items: surfcamps.map((menu) => ({
				key: menu.id,
				label: menu.name,
				full_slug: menu.full_slug,
			})),
		},
		{
			key: 2,
			label: 'Accommodation',
			collapse: true,
			items: accommodation.map((menu) => ({
				key: menu.id,
				label: menu.name,
				full_slug: menu.full_slug,
			})),
		},
		...menus.map((menu) => ({
			key: menu.id,
			label: menu.name,
			full_slug: menu.full_slug,
		})),
	];

	const handleCollapseClick = (e, item) => {
		e.stopPropagation();
		const { key, full_slug, collapse } = item;
		if (!collapse) router.push(full_slug);
		if (key === collapseId) setCollapseOpen(!collapseOpen);
		else {
			setCollapseId(key);
			setCollapseOpen(true);
		}
	};

	const handleClick = (event, menu) => {
		if (menu.collapse) {
			setMenuOptions(menu.items);
			setAnchorEl(event.currentTarget);
		} else router.push(menu.full_slug);
	};

	const handleClose = () => setAnchorEl(null);

	const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);

	const drawer = (
		<Grid onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Grid
				component="img"
				src={logo.filename}
				alt={logo.alt}
				width={155}
				sx={styles.smallScreenlogo}
				height={50}
				onClick={() => router.push('/')}
			/>
			<Divider />
			<List
				sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
				component="nav"
			>
				{navItems.map((item) => {
					const showIcon =
						collapseOpen && collapseId === item.key ? (
							<ExpandMoreIcon direction="up" />
						) : (
							<ExpandMoreIcon direction="down" />
						);
					return (
						<React.Fragment key={item.key}>
							<ListItemButton onClick={(e) => handleCollapseClick(e, item)}>
								<ListItemText sx={styles.listText} primary={item.label} />
								{item.collapse && showIcon}
							</ListItemButton>
							{item.collapse && collapseId === item.key && (
								<Collapse in={collapseOpen} timeout="auto" unmountOnExit>
									<List component="div" disablePadding>
										{item.items.map((link) => (
											<ListItemButton
												component={Link}
												key={link.key}
												sx={{ pl: 4 }}
												href={link.full_slug}
											>
												<ListItemText
													sx={styles.listText}
													primary={link.label}
												/>
											</ListItemButton>
										))}
									</List>
								</Collapse>
							)}
						</React.Fragment>
					);
				})}
			</List>
		</Grid>
	);

	return (
		<React.Fragment>
			<ElevationScroll {...props}>
				<AppBar>
					<Toolbar sx={{ my: '.5rem' }}>
						<Grid
							container
							flex={1}
							spacing={2}
							alignItems="center"
							textAlign="center"
						>
							<Grid size={2}>
								<Grid
									component="img"
									src={logo.filename}
									alt={logo.alt}
									width={155}
									sx={styles.logo}
									height={50}
									onClick={() => router.push('/')}
								/>
							</Grid>
							<Grid
								size={{ xs: 10, md: 6 }}
								offset={{ xs: 0, md: 4 }}
								textAlign="right"
							>
								{mainMenu.map((button, index) => (
									<Button
										key={button.id}
										sx={{
											mx: '0.5rem',
											display: { xs: 'none', sm: 'inline-flex' },
										}}
										variant={index % 2 === 0 ? 'outlined' : 'contained'}
									>
										<Link
											style={{ color: index % 2 === 0 ? 'black' : 'white' }}
											href={button.full_slug}
										>
											{button.name}
										</Link>
									</Button>
								))}
								<IconButton
									edge="start"
									onClick={handleDrawerToggle}
									sx={{ mx: '1rem', display: { sm: 'none' } }}
									icon={<MenuIcon />}
								/>
							</Grid>
							{navItems.map((item) => {
								return (
									<Grid
										key={item.key}
										size={2}
										sx={styles.btn}
										onClick={(e) => handleClick(e, item)}
									>
										{item.label}
									</Grid>
								);
							})}
						</Grid>
						<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
							{menuOptions.map((item) => (
								<MenuItem key={item.key} sx={styles.btn} onClick={handleClose}>
									<Link href={item.full_slug}>{item.label}</Link>
								</MenuItem>
							))}
						</Menu>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<nav>
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</nav>
		</React.Fragment>
	);
}
