import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

function Contact(props) {
  const { sx = {}, width = 18, height = 18, ...rest } = props;

  return (
    <SvgIcon
      sx={[styles.icon, { width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      fontSize="small"
      {...rest}
    >
      <path
        d="M30.1072 53.0162C42.759 53.0162 53.0152 42.7599 53.0152 30.1082C53.0152 17.4565 42.759 7.2002 30.1072 7.2002C17.4555 7.2002 7.19922 17.4565 7.19922 30.1082C7.19922 42.7599 17.4555 53.0162 30.1072 53.0162Z"
        stroke="black"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M30.1069 53.0162C37.1352 53.0162 42.8329 42.7599 42.8329 30.1082C42.8329 17.4565 37.1352 7.2002 30.1069 7.2002C23.0785 7.2002 17.3809 17.4565 17.3809 30.1082C17.3809 42.7599 23.0785 53.0162 30.1069 53.0162Z"
        stroke="black"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M30.1074 7.2002V53.0222"
        stroke="black"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M47.3996 15.642C43.1996 18.324 37.0136 20.022 30.1076 20.022C23.0876 20.022 16.7996 18.264 12.5996 15.498"
        stroke="black"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M12.5996 44.7964C16.7996 42.1144 22.9856 40.4224 29.8916 40.4224C36.9116 40.4224 43.1996 42.1744 47.3996 44.9404"
        stroke="black"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M7.79883 30.2222H52.7988"
        stroke="black"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </SvgIcon>
  );
}

Contact.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};

export default Contact;
