import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

function Date(props) {
  const { sx = {}, width = 18, height = 18, ...rest } = props;

  return (
    <SvgIcon
      sx={[styles.icon, { width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
      viewBox="0 0 24 24"
      fontSize="small"
      {...rest}
    >
      <path d="M18.984 20.016v-11.016h-13.969v11.016h13.969zM18.984 3.984q0.797 0 1.406 0.609t0.609 1.406v14.016q0 0.797-0.609 1.383t-1.406 0.586h-13.969q-0.844 0-1.43-0.563t-0.586-1.406v-14.016q0-0.797 0.586-1.406t1.43-0.609h0.984v-1.969h2.016v1.969h7.969v-1.969h2.016v1.969h0.984zM17.016 11.016v1.969h-2.016v-1.969h2.016zM12.984 11.016v1.969h-1.969v-1.969h1.969zM9 11.016v1.969h-2.016v-1.969h2.016z"></path>
    </SvgIcon>
  );
}

Date.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};

export default Date;
