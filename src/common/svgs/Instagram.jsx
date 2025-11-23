import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

function Instagram(props) {
  const { sx = {}, width = 18, height = 18, ...rest } = props;

  return (
    <SvgIcon
      sx={[styles.icon, { width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fontSize="small"
      {...rest}
    >
      <path
        d="M33.6 2.4V33.6H2.4V2.4H33.6ZM33.6 0H2.4C1.76348 0 1.15303 0.252857 0.702944 0.702944C0.252857 1.15303 0 1.76348 0 2.4V33.6C0 34.2365 0.252857 34.847 0.702944 35.2971C1.15303 35.7471 1.76348 36 2.4 36H33.6C34.2365 36 34.847 35.7471 35.2971 35.2971C35.7471 34.847 36 34.2365 36 33.6V2.4C36 1.76348 35.7471 1.15303 35.2971 0.702944C34.847 0.252857 34.2365 0 33.6 0Z"
        fill="#1D1D1B"
      />
      <path
        d="M18.0006 25.7756C22.2952 25.7756 25.7766 22.2942 25.7766 17.9996C25.7766 13.7051 22.2952 10.2236 18.0006 10.2236C13.706 10.2236 10.2246 13.7051 10.2246 17.9996C10.2246 22.2942 13.706 25.7756 18.0006 25.7756Z"
        stroke="#1D1D1B"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M29.7008 7.8C30.1978 7.8 30.6008 7.39706 30.6008 6.9C30.6008 6.40294 30.1978 6 29.7008 6C29.2037 6 28.8008 6.40294 28.8008 6.9C28.8008 7.39706 29.2037 7.8 29.7008 7.8Z"
        stroke="#1D1D1B"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}

Instagram.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};

export default Instagram;
