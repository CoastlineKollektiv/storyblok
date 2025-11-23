import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

function WhatsApp(props) {
  const { sx = {}, width = 18, height = 18, ...rest } = props;

  return (
    <SvgIcon
      sx={[styles.icon, { width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
      fontSize="small"
      viewBox="0 0 575 575"
      {...rest}
    >
      <defs>
        <linearGradient
          id="a"
          x1="116.78"
          y1="452.75"
          x2="526.6"
          y2="56.06"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#25cf43" />
          <stop offset="1" stopColor="#61fd7d" />
        </linearGradient>
      </defs>
      <rect width="575" height="575" rx="287.5" fill="url(#a)" />
      <path
        d="M415.99 155.95a166.42 166.42 0 00-118.43-49.05c-92.29 0-167.41 75.09-167.45 167.39a167.08 167.08 0 0022.32 83.61l-23.75 86.75 88.77-23.28a167.27 167.27 0 0080 20.38h.11c92.28 0 167.41-75.1 167.45-167.4a166.42 166.42 0 00-49.02-118.4zM297.56 413.5h-.06a139 139 0 01-70.84-19.39l-5.08-3-52.7 13.79 14.06-51.34-3.31-5.27a138.77 138.77 0 01-21.28-74c0-76.72 62.47-139.13 139.24-139.13a139.18 139.18 0 01139.12 139.21c-.03 76.72-62.46 139.13-139.15 139.13zm76.34-104.2c-4.19-2.09-24.76-12.21-28.59-13.61s-6.63-2.09-9.41 2.1-10.81 13.6-13.25 16.4-4.88 3.14-9.07 1-17.66-6.51-33.65-20.76c-12.43-11.09-20.83-24.79-23.27-29s-.26-6.46 1.83-8.54c1.89-1.87 4.19-4.89 6.28-7.33s2.79-4.19 4.18-7 .7-5.23-.35-7.32-9.41-22.69-12.9-31.06c-3.39-8.16-6.84-7.05-9.41-7.18s-5.23-.15-8-.15a15.38 15.38 0 00-11.16 5.24c-3.83 4.18-14.64 14.3-14.64 34.89s15 40.48 17.09 43.27 29.5 45 71.47 63.16a241.36 241.36 0 0023.85 8.81 57.39 57.39 0 0026.36 1.65c8-1.2 24.75-10.11 28.24-19.88s3.48-18.15 2.44-19.89-3.88-2.71-8.06-4.8z"
        fill="#fff"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
}

WhatsApp.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};

export default WhatsApp;
