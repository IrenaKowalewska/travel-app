import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Logo from './Logo';
import Search from './Search';

const useStyles = makeStyles((theme) => ({
  flex: {
    maxWidth: '95vw',
    // height:50,
    display: 'flex',
    // flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '1rem 0',
    // [theme.breakpoints.down('lg')]: {
    //   justifyContent: 'center',
    // },
  },
  // logo: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   alignItems: 'center',
  //   // justifyContent: 'space-between',
  //   width: 120,
  //   // border: '1px solid red',
  // },
  // // logo_text: {},
  // bold: {
  //   fontWeight: 600,
  //   lineHeight: 'normal',
  //   padding: '0 0.5rem'
  // },
}));

function Header({ lang }) {
  const classes = useStyles();
  return (
    <Box bgcolor="primary.dark">
      <Container className={classes.flex}>
       <Logo/>
       <Search/>
      </Container>
    </Box>
  );
}

export default Header;
