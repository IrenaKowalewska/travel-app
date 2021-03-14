import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { LangContext } from '../App';

const useStyles = makeStyles((theme) => ({
  bold: {
    fontWeight: 600,
  },
}));

function DateWidget({ url }) {
  const classes = useStyles();
  const lang = React.useContext(LangContext);
  let timeZone = '';
  switch (url) {
    case 'turkey':
      timeZone = 'Europe/Istanbul';
      break; // Turkey Ankara
    case 'greece':
      timeZone = 'Europe/Athens';
      break; // Greece Athens
    case 'spain':
      timeZone = 'Europe/Madrid';
      break; // Spain Madrid
    case 'italy':
      timeZone = 'Europe/Rome';
      break; // Italy Rome
    case 'sri-lanka':
      timeZone = 'Asia/Colombo';
      break; // Sri Lanka Sri Jayawardenepura Kotte
    case 'uae':
      timeZone = 'Asia/Dubai';
      break; // United Arab Emirates Abu Dhabi
    case 'egypt':
      timeZone = 'Africa/Cairo';
      break; // Egypt Cairo

    default:
      timeZone = 'Europe/Podgorica'; // Montenegro Podgorica
  }
  const options = {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: timeZone,
  };
  const today = new Date();
  const currentDate = today.toLocaleString(lang, options);

  return (
      <Typography className={classes.bold} color="textPrimary" component="h2">
        {currentDate}
      </Typography>
  );
}

export default DateWidget;
