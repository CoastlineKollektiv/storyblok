import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Grid2, AppBar, Slide, Tabs as MuiTabs, Tab } from '@mui/material';
import Text from './Text';

const styles = {
  '.disabled': {
    color: 'colors.disabled'
  },
  minHeight: '48px',
  '.Mui-selected': {
    color: 'text.secondary'
  },
  '.MuiTabs-indicator': {
    height: 3
  },
  MuiAppBar: {
    background: 'common.white'
  },
  MuiTabs: {
    centered: {
      flex: 0,
      borderBottom: 'none',
      textWrap: 'nowrap'
    },
    tabsCentered: {
      content: 'justifyContent: "center"'
    },
    tabsBordered: {
      borderBottom: '1px solid',
      borderColor: 'colors.drawText'
    }
  },
  tab: {
    opacity: 1,
    p: '3 8px',
    minHeight: '48px',
    borderBottom: '1px solid lightgray',
    minWidth: 'fit-content'
  },
  tabTitle: {
    color: 'inherit'
  }
};

/**
 * A customizable tab component for creating tabbed interfaces.
 *
 * @component
 *
 * `Tabs` is a versatile React component for creating tabbed interfaces. It allows you
 * to define tab labels, content, and various configuration options. Developers can
 * customize the appearance, behavior, and positioning of tabs, making it suitable for
 * a wide range of use cases.
 *
 * @example
 *
 * Example usage of Tabs within a component
 *
 * ```jsx
 * <Tabs
 * tabs={[
 * { id: 1, label: 'Tab 1', content: <div>Content for Tab 1</div> },
 * { id: 2, label: 'Tab 2', content: <div>Content for Tab 2</div> },
 * ]}
 * variant="fullWidth"
 * centered={false}
 * defaultValue={0}
 * isAppBar={false}
 * />
 * ```
 */

/* eslint-disable react/prop-types */
function Tabs(props) {
  const {
    tabs,
    isAppBar = false,
    variant = 'fullWidth',
    sx = {},
    centered = false,
    defaultValue = 0,
    onChange = null
  } = props;

  const [value, setValue] = useState(defaultValue);

  const filterTabs = useMemo(() => tabs.filter(Boolean), [tabs]);

  const handleChange = useCallback(
    (e, newValue) => {
      setValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    },
    [onChange]
  );

  const MuiTabsComponent = useMemo(() => {
    return (
      <MuiTabs
        value={value}
        centered={centered}
        sx={[
          styles.tabs,
          centered && styles.tabsCentered,
          variant === 'scrollable' && {
            '& .MuiTabsClasses.scrollButtons': { opacity: 0.3 }
          },
          sx
        ]}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="inherit"
        variant={variant}
        {...(variant === 'scrollable' && {
          allowScrollButtonsMobile: variant === 'scrollable'
        })}
      >
        {filterTabs.map((item, index) => {
          const inValue = item.value === value || item.value === index;
          return (
            <Tab
              sx={[styles.tab, centered && styles.centered, styles.tabStyles]}
              key={item.id}
              value={item.value || index}
              disableFocusRipple
              disableRipple
              disabled={item.disabled}
              label={
                <Text
                  bold={inValue}
                  type="title"
                  fontType="secondary"
                  sx={[styles.tabLabel, styles.tabTitle]}
                >
                  {item.label}
                </Text>
              }
              icon={item.icon}
              iconPosition={item.iconPosition || 'start'}
            />
          );
        })}
      </MuiTabs>
    );
  }, [value, centered, variant, sx, handleChange, filterTabs]);

  const TabsPanelComponent = useMemo(() => {
    return (
      <React.Fragment>
        {filterTabs.map((item, index) => {
          const inValue = item.value === value || item.value === index;
          return (
            <Slide
              direction="left"
              key={item.id}
              in={inValue}
              mountOnEnter
              unmountOnExit
            >
              <Grid2
                container
                size={12}
                role="tabpanel"
                sx={styles.tabPanelContent}
              >
                <Grid2 size={{ xs: 12, md: 10 }}>{item.content}</Grid2>
              </Grid2>
            </Slide>
          );
        })}
      </React.Fragment>
    );
  }, [filterTabs, value]);

  return (
    <React.Fragment>
      {isAppBar ? (
        <AppBar position="static" sx={[styles.appBar, styles.elevation(1)]}>
          {MuiTabsComponent}
        </AppBar>
      ) : (
        MuiTabsComponent
      )}
      {TabsPanelComponent}
    </React.Fragment>
  );
}

Tabs.propTypes = {
  /**
   * Whether the tabs should be centered.
   */
  centered: PropTypes.bool,
  /**
   * Whether the tabs should be displayed within an AppBar.
   */
  isAppBar: PropTypes.bool,
  /**
   * The default tab index or value.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * An array of tab objects, where each tab object should have the following shape:
   * `{ id: 1, label: 'Tab 1', content: <div>Content for Tab 1</div> }`
   */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      label: PropTypes.node.isRequired,
      content: PropTypes.node.isRequired,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      icon: PropTypes.node,
      iconPosition: PropTypes.oneOf(['start', 'end', 'top', 'bottom']),
      disabled: PropTypes.bool
    })
  ).isRequired,
  /**
   * The tab variant (e.g., 'fullWidth', 'scrollable').
   */
  variant: PropTypes.oneOf(['fullWidth', 'scrollable']),
  /**
   * Custom styles using the Material-UI sx prop.
   */
  sx: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
    PropTypes.array
  ]),
  /**
   * onChange function handler
   */
  onChange: PropTypes.func
};

export default Tabs;
