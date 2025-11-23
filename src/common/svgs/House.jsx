import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

function House(props) {
  const { sx = {}, width = 219, height = 124, ...rest } = props;

  return (
    <SvgIcon
      sx={[styles.icon, { width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
      viewBox="0 0 219 124"
      fontSize="small"
      fill="none"
      {...rest}
    >
      <path
        d="M123 17V25.4"
        stroke="#070707"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
      <path
        d="M123 50.5996V58.9996"
        stroke="#070707"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
      <path
        d="M144 38H135.6"
        stroke="#070707"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
      <path
        d="M110.4 38H102"
        stroke="#070707"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
      <path
        d="M138.001 52.9996L132.061 47.0596"
        stroke="#070707"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
      <path
        d="M114.241 29.2398L108.301 23.2998"
        stroke="#070707"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
      <path
        d="M108.301 52.6998L114.241 46.7598"
        stroke="#070707"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
      <path
        d="M132.061 28.94L138.001 23"
        stroke="#070707"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
      <path
        d="M123.26 44.9995C126.982 44.9995 130 41.9819 130 38.2595C130 34.5371 126.982 31.5195 123.26 31.5195C119.537 31.5195 116.52 34.5371 116.52 38.2595C116.52 41.9819 119.537 44.9995 123.26 44.9995Z"
        stroke="#070707"
        strokeWidth="4"
        strokeLinejoin="bevel"
        fill="none"
      />
      <path
        d="M195.999 103.51C168.819 101.82 154.899 95.3801 159.949 81.1501C162.189 74.8501 173.779 79.4401 173.779 79.4401C171.689 70.0001 161.559 66.0001 155.349 65.9201C135.209 65.6901 115.249 101.25 97.3491 103.92C94.2555 104.457 91.1338 104.818 87.9991 105C87.5491 105 87.0891 104.67 86.6191 104.69"
        stroke="#070707"
        strokeWidth="4"
        strokeLinejoin="bevel"
        fill="none"
      />
      <path
        d="M87 107V58"
        stroke="#070707"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
      <path
        d="M76.79 105H31V61.5V59"
        stroke="#070707"
        strokeWidth="4"
        strokeMiterlimit="10"
        fill="none"
      />
      <path
        d="M20.1406 67.14L59.0006 39L99.0006 67"
        stroke="#070707"
        strokeWidth="4"
        fill="none"
        strokeMiterlimit="10"
      />
      <path
        d="M79 47V54"
        stroke="#070707"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
      <path
        d="M45 105V77"
        stroke="#070707"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
      <path
        d="M60 105V77"
        stroke="#070707"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
      <path
        d="M43 77H62"
        stroke="#070707"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
    </SvgIcon>
  );
}

House.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};

export default House;
