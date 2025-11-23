import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

function Payment(props) {
  const { sx = {}, width = 18, height = 18, ...rest } = props;

  return (
    <SvgIcon
      sx={[styles.icon, { width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fontSize="small"
      {...rest}
    >
      <path
        d="M45.6004 9.88818H14.4004V28.2002H45.6004V9.88818Z"
        stroke="black"
        strokeWidth="3"
        strokeMiterlimit="10"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M14.4004 15.8882H45.6004"
        stroke="black"
        strokeWidth="3"
        strokeMiterlimit="10"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M20.9992 43.2001C23.6502 43.2001 25.7992 41.0511 25.7992 38.4001C25.7992 35.7491 23.6502 33.6001 20.9992 33.6001C18.3483 33.6001 16.1992 35.7491 16.1992 38.4001C16.1992 41.0511 18.3483 43.2001 20.9992 43.2001Z"
        stroke="black"
        strokeWidth="3"
        strokeMiterlimit="10"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M28.8008 52.7998C30.4576 52.7998 31.8008 51.4567 31.8008 49.7998C31.8008 48.143 30.4576 46.7998 28.8008 46.7998C27.1439 46.7998 25.8008 48.143 25.8008 49.7998C25.8008 51.4567 27.1439 52.7998 28.8008 52.7998Z"
        stroke="black"
        strokeWidth="3"
        strokeMiterlimit="10"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M38.9992 46.8002C41.6502 46.8002 43.7992 44.6512 43.7992 42.0002C43.7992 39.3492 41.6502 37.2002 38.9992 37.2002C36.3483 37.2002 34.1992 39.3492 34.1992 42.0002C34.1992 44.6512 36.3483 46.8002 38.9992 46.8002Z"
        stroke="black"
        strokeWidth="3"
        strokeMiterlimit="10"
        fill="none"
        strokeLinecap="round"
      />
    </SvgIcon>
  );
}

Payment.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};

export default Payment;
