import React from 'react';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5rem',
  },
  bold: {
    fontWeight: 600,
    fontSize: '1rem',
  },
}));

function NotFound({ notFoundMessage }) {
  const classes = useStyles();
  return (
    <Box bgcolor="primary.light">
      <Container className={classes.root}>
        <Typography
          className={classes.bold}
          color="textPrimary"
          component="h2"
          align="center"
          display="block"
        >
          {notFoundMessage}
        </Typography>
      </Container>
    </Box>
  );
}

export default NotFound;
