import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

function Location(props) {
  const { sx = {}, width = 18, height = 18, ...rest } = props;

  return (
    <SvgIcon
      sx={[styles.icon, { width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
      viewBox="0 0 52 52"
      fontSize="small"
      {...rest}
    >
      <path
        d="M38.6053 18.8866C38.6053 25.8702 25.9589 46.2802 25.9589 46.2802C25.9589 46.2802 13.3125 25.8702 13.3125 18.8866C13.3125 15.5326 14.6449 12.3159 17.0165 9.94428C19.3882 7.57262 22.6049 6.24023 25.9589 6.24023C29.3129 6.24023 32.5296 7.57262 34.9013 9.94428C37.2729 12.3159 38.6053 15.5326 38.6053 18.8866V18.8866Z"
        stroke="currentcolor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M25.959 21.8712C28.4088 21.8712 30.3946 19.8853 30.3946 17.4356C30.3946 14.9859 28.4088 13 25.959 13C23.5093 13 21.5234 14.9859 21.5234 17.4356C21.5234 19.8853 23.5093 21.8712 25.959 21.8712Z"
        stroke="currentcolor"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </SvgIcon>
  );
}

Location.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};

export default Location;
