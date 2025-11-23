import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import { WhatsAppIcon } from '@/common/svgs';

export default function BasicSpeedDial({ blok }) {
  return (
    <SpeedDial
      onClick={() => window.open(blok.link.url)}
      ariaLabel="SpeedDial basic example"
      sx={{ position: 'fixed', bottom: 50, right: 50 }}
      icon={<WhatsAppIcon width="100%" height="100%" />}
    />
  );
}
