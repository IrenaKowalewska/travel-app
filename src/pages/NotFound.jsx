import React from 'react';
import { makeStyles } from '@material-ui/core';
import backgroundImg from '../assets/images/main.jpg';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center'
  },
  num: {
    fontSize: 300
  },
  content: {
    fontSize: 50
  }
}));

function NotFound({ notFoundMessage }) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.num}>404</div>
  <h3 className={classes.content}>{notFoundMessage}</h3>
    </div>
  );
}

export default NotFound;
