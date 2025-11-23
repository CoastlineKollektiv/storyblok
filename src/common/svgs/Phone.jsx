import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

function Phone(props) {
  const { sx = {}, width = 18, height = 18, ...rest } = props;

  return (
    <SvgIcon
      sx={[styles.icon, { width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
      fontSize="small"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M6.609 10.781q2.25 4.359 6.609 6.609l2.203-2.203q0.469-0.469 1.031-0.234 1.688 0.563 3.563 0.563 0.422 0 0.703 0.281t0.281 0.703v3.516q0 0.422-0.281 0.703t-0.703 0.281q-7.031 0-12.023-4.992t-4.992-12.023q0-0.422 0.281-0.703t0.703-0.281h3.516q0.422 0 0.703 0.281t0.281 0.703q0 1.875 0.563 3.563 0.188 0.609-0.234 1.031z"></path>
    </SvgIcon>
  );
}

Phone.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};

export default Phone;
