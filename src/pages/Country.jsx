import React from 'react';
import Container from '@material-ui/core/Container';
import { Box, makeStyles } from '@material-ui/core';
import posterImg from '../assets/images/main.jpg';
import { Player, BigPlayButton } from 'video-react';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1170,
  },
  info: {
    display: 'flex',
  },
  info_left: {
    maxWidth: 970,
    flexGrow: 1,
  },
}));

function Page() {
  const classes = useStyles();
  return (
    // <Box bgcolor="primary.light">
    <Box bgcolor="#edfdff">
      <Container className={classes.root}>
        {/* //grid */}
        <div className={classes.info}>
          <div className={classes.info_left}>
            <div>img</div>
            <div>text</div>
            <div>slider</div>
          </div>
          <div className={classes.info_right}>
            <div>weather</div>
            <div>date</div>
            <div>currency</div>
          </div>
        </div>
        {/* //grid */}
        <Player playsInline poster="/assets/posters/uae.jpg">
           <source src="assets/videos/uae.mp4" />
          <BigPlayButton position="center" />
        </Player>
      </Container>
      <div>map</div>
    </Box>
  );
}

export default Page;
