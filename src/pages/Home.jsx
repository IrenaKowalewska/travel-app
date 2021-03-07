import React from 'react';
import Container from '@material-ui/core/Container';
import ImageCard from '../components/ImageCard';
import { Box, makeStyles } from '@material-ui/core';
import backgroundImg from '../assets/images/main.jpg';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: 300,
  },
  cards: {
    maxWidth: 1170,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center',
    },
    margin: '-140px auto 0 auto',
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Box bgcolor="primary.main">
      <Box className={classes.background}></Box>
      <Container className={classes.cards}>
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </Container>
    </Box>
  );
}

export default Home;
