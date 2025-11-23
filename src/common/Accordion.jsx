import * as React from 'react';
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material';
import { StoryblokComponent } from '@storyblok/react';
import { ExpandMoreIcon } from './svgs';

const styles = {
  accordion: theme => ({
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&::before': {
      display: 'none'
    }
  }),
  heading: { fontWeight: 'bold' }
};

export default function Accordion(props) {
  const { data, defaultExpanded = null } = props;
  const [expanded, setExpanded] = React.useState(defaultExpanded);

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return data.map(item => {
    return (
      <MuiAccordion
        sx={styles.accordion}
        key={item._uid}
        disableGutters
        square
        elevation={0}
        expanded={expanded === item._uid}
        onChange={handleChange(item._uid)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon width={24} height={24} />}
        >
          <Typography sx={styles.heading} component="span">
            {item.heading}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StoryblokComponent blok={item.content[0]} />
        </AccordionDetails>
      </MuiAccordion>
    );
  });
}
