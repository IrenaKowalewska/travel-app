import React, { useMemo } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { LangContext } from '../App';

const useStyles = makeStyles((theme) => ({
  bold: {
    fontWeight: 600,
  },
}));

function DateWidget({ url, timeZone }) {
  const classes = useStyles();
  const lang = React.useContext(LangContext);

  const options = useMemo(
    () => ({
      day: 'numeric',
      month: 'long',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: timeZone,
    }),
    [timeZone],
  );

  const [currentDate, setCurrentDate] = React.useState(
    new Date().toLocaleString(lang, options),
  );

  React.useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentDate(new Date().toLocaleString(lang, options));
    }, 1000);
    return () => {
      clearTimeout(interval);
    };
  }, [currentDate, lang, options]);

  return (
    <Typography className={classes.bold} color="textPrimary" component="h2">
      {currentDate}
    </Typography>
  );
}

export default DateWidget;
