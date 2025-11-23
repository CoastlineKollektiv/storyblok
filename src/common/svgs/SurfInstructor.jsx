import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

function SurfInstructor(props) {
  const { sx = {}, width = 40, height = 40, ...rest } = props;

  return (
    <SvgIcon
      sx={[styles.icon, { width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
      viewBox="0 0 51 51"
      fontSize="small"
      {...rest}
    >
      <path
        d="M14.198 14.8207C16.6006 14.8207 18.5483 12.873 18.5483 10.4704C18.5483 8.06781 16.6006 6.12012 14.198 6.12012C11.7954 6.12012 9.84766 8.06781 9.84766 10.4704C9.84766 12.873 11.7954 14.8207 14.198 14.8207Z"
        stroke="#1D1D1B"
        strokeWidth="3"
        fill="none"
        strokeLinejoin="bevel"
      />
      <path
        d="M22.2716 35.7002V27.4382C22.2864 26.3645 22.0892 25.2984 21.6912 24.301C21.2931 23.3037 20.7022 22.3947 19.9522 21.6262C19.2021 20.8577 18.3078 20.2448 17.3204 19.8226C16.3331 19.4005 15.2721 19.1773 14.1983 19.166V19.166C13.1241 19.1767 12.0626 19.3993 11.0746 19.8212C10.0867 20.243 9.19173 20.8558 8.44117 21.6244C7.69061 22.393 7.09919 23.3022 6.70085 24.2999C6.30252 25.2975 6.10509 26.3641 6.11992 27.4382V27.4382V40.8002H16.3199"
        stroke="#1D1D1B"
        strokeWidth="3"
        fill="none"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M28.27 40.8002C28.27 40.8002 25.9342 10.2002 36.5116 10.2002C47.6347 10.2002 44.7532 40.8002 44.7532 40.8002H28.27Z"
        stroke="#1D1D1B"
        strokeWidth="3"
        strokeMiterlimit="10"
        fill="none"
        strokeLinecap="square"
      />
      <path
        d="M36.7812 11.7305V40.2905"
        stroke="#1D1D1B"
        strokeWidth="3"
        strokeMiterlimit="10"
        fill="none"
        strokeLinecap="square"
      />
    </SvgIcon>
  );
}

SurfInstructor.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};

export default SurfInstructor;
