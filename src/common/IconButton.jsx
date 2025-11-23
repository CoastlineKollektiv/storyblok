import React from 'react';
import PropTypes from 'prop-types';
import { IconButton as MuiIconButton, Grid } from '@mui/material';

const styles = {
  iconButton: { height: '100%', py: '4px', px: 0 },
  labelIconButton: { cursor: 'pointer' },
  noPadding: { p: 0 }
};

function IconButton(props) {
  const {
    icon,
    onClick,
    sx = {},
    disabled = false,
    noPadding = false,
    label = null,
    ...others
  } = props;

  const button = (
    <MuiIconButton
      sx={[
        styles.iconButton,
        noPadding && styles.noPadding,
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
      onClick={onClick}
      disableFocusRipple
      disableTouchRipple
      disableRipple
      disabled={Boolean(disabled)}
      size="small"
      {...others}
    >
      {icon}
    </MuiIconButton>
  );
  return label ? (
    <Grid
      container
      sx={styles.labelIconButton}
      onClick={onClick}
      flexDirection="column"
    >
      {button}
      <Grid>{label}</Grid>
    </Grid>
  ) : (
    button
  );
}

IconButton.propTypes = {
  disabled: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number
  ]),
  icon: PropTypes.node.isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  noPadding: PropTypes.bool,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};

export default IconButton;
