import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Grid, Toolbar, MenuItem, Menu } from '@mui/material';
import Link from 'next/link';
import { Button } from '@/common';

const styles = {
  link: {
    color: 'common.black',
    textTransform: 'uppercase',
    fontSize: '0.875rem',
    '& a': { color: 'common.black' }
  },
  btn: {
    cursor: 'pointer',
    color: 'common.black',
    fontWeight: 'bold'
  },
  scroll: {
    bgcolor: 'common.white'
  }
};

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: '0',
    target: window ? window() : undefined
  });
  const customProps = {
    elevation: trigger ? 4 : 0,
    sx: trigger ? styles.scroll : { bgcolor: 'transparent' }
  };

  const ele = children ? React.cloneElement(children, customProps) : null;

  return ele;
}

ElevationScroll.propTypes = {
  children: PropTypes.element,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default function ElevateAppBar(props) {
  const { blok } = props;
  const { logo, mainMenu, menus, accommodation, surfcamps } = blok;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuOptions, setMenuOptions] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    if (event.target.innerText === 'SURF CAMPS') setMenuOptions(surfcamps);
    else setMenuOptions(accommodation);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ElevationScroll {...props}>
      <AppBar>
        <Toolbar sx={{ my: '.5rem' }}>
          <Grid container flex={1} alignItems="center" textAlign="center">
            <Grid size={2}>
              <Grid
                component="img"
                src={logo.filename}
                alt={logo.alt}
                width={155}
                height={62}
              />
            </Grid>
            <Grid size={6} offset={4} textAlign="right">
              {mainMenu.map((button, index) => (
                <Button
                  key={button.id}
                  sx={{ mx: '0.5rem' }}
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
            </Grid>
            <Grid size={2} sx={styles.link}>
              <Grid sx={styles.btn} variant="text" onClick={handleClick}>
                Surf Camps
              </Grid>
            </Grid>
            <Grid size={2} sx={styles.link}>
              <Grid sx={styles.btn} variant="text" onClick={handleClick}>
                Accommodation
              </Grid>
            </Grid>
            {menus.map(menu => (
              <Grid key={menu.id} size={2} sx={styles.link}>
                <Link href={menu.full_slug}>{menu.name}</Link>
              </Grid>
            ))}
          </Grid>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {menuOptions.map(item => (
              <MenuItem key={item.id} sx={styles.link} onClick={handleClose}>
                <Link href={item.full_slug}>{item.name}</Link>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
