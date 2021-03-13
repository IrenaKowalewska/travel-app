import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Logo from './Logo';
import Search from './Search';
import Language from './Language';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  flex: {
    maxWidth: '95vw',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '1rem 0',
  },
}));

function Header() {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <Box bgcolor="primary.dark">
      <Container className={classes.flex}>
       <Logo/>
      {pathname==='/' && <Search/>}
       <Language/>
      </Container>
    </Box>
  );
}

export default Header;
