import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useRef, useState } from 'react';

import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from '@material-ui/core';
import { ExpandMore, Language } from '@material-ui/icons';

import { usePublicPageLanguage } from '@openimis/fe-core';
import { AVAILABLE_LANGUAGES } from '../constants';

/**
 * @name PublicPageLangSwitch
 * @description This component is responsible for rendering the language switcher for the Moldova landing page.
 * It is available on the `/front` route if the user is not authenticated.
 */

const useStyles = makeStyles((theme) => ({
  languageLabel: {
    fontWeight: 600,
    fontSize: '14px',
    textTransform: 'capitalize',
  },
  menuItem: {
    fontSize: '14px',
    textTransform: 'capitalize',
    color: theme.landing.palette.primary,
  },
}));

function PublicPageLangSwitch() {
  const classes = useStyles();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const { publicPageLang, onPublicPageLangChange } = usePublicPageLanguage();

  const handleToggle = () => setOpen((prevOpen) => !prevOpen);

  const handleClose = (event) => {
    if (anchorRef.current?.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleMenuItemClick = (lang) => {
    setOpen(false);
    onPublicPageLangChange(lang);
    window.location.reload();
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const renderMenuItems = () => AVAILABLE_LANGUAGES.filter(({ code }) => code !== publicPageLang).map(
    ({ name, code }) => (
      <MenuItem key={code} onClick={() => handleMenuItemClick(code)}>
        <Typography variant="inherit" noWrap>
          {name}
        </Typography>
      </MenuItem>
    ),
  );

  const getLanguageNameByCode = (languages, code) => {
    const language = languages.find((lang) => lang.code === code);
    return language ? language.name : 'en';
  };

  return (
    <>
      {AVAILABLE_LANGUAGES
        && AVAILABLE_LANGUAGES.length !== 0
        && AVAILABLE_LANGUAGES.length !== 1 && (
          <Button
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            color="inherit"
            onClick={handleToggle}
            startIcon={<Language />}
            endIcon={<ExpandMore />}
            disabled={!AVAILABLE_LANGUAGES.length}
          >
            <Typography className={classes.languageLabel}>
              {getLanguageNameByCode(AVAILABLE_LANGUAGES, publicPageLang)}
            </Typography>
          </Button>
      )}
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                  className={classes.menuItem}
                >
                  {renderMenuItems()}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default PublicPageLangSwitch;
