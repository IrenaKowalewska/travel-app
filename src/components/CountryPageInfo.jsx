import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { LangContext } from '../App';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '90%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: '0',
    },
    margin: '2rem 0.5rem 2rem 0',
    boxShadow: 'none',
  },
  title: {
    fontWeight: 600,
    fontSize: '1.5rem',
    margin: '1.8rem 0 1.5rem',
    [theme.breakpoints.down('xs')]: {
      margin: '0 0 1rem 0',
    },
  },
  bold: {
    fontWeight: 600,
  },
}));

function CountryPageInfo({
  country,
  capital,
  countryImg,
  population,
  religion,
  language,
  currency,
}) {
  const classes = useStyles();
  const lang = React.useContext(LangContext);

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        alt={`${country} image`}
        image={`assets/countryImg/${countryImg}`}
      />
      <CardContent>
        <Typography
          className={classes.title}
          color="textPrimary"
          component="h2"
        >
          {country}
        </Typography>
        <Typography className={classes.bold} color="textPrimary" component="p">
          {lang === 'ru' ? 'Столица' : lang === 'en' ? 'Capital' : 'Kapitał'} —{' '}
          {capital}
        </Typography>
        <Typography className={classes.bold} color="textPrimary" component="p">
          {lang === 'ru'
            ? 'Население'
            : lang === 'en'
            ? 'Population'
            : 'Populacja'}{' '}
          — {population}
        </Typography>
        <Typography className={classes.bold} color="textPrimary" component="p">
          {lang === 'ru' ? 'Религия' : lang === 'en' ? 'Religion' : 'Religia'} —{' '}
          {religion}
        </Typography>
        <Typography className={classes.bold} color="textPrimary" component="p">
          {lang === 'ru'
            ? 'Официальный язык'
            : lang === 'en'
            ? 'Official language'
            : 'Oficjalny język'}{' '}
          — {language}
        </Typography>
        <Typography className={classes.bold} color="textPrimary" component="p">
          {lang === 'ru' ? 'Валюта' : lang === 'en' ? 'Currency' : 'Waluta'} –{' '}
          {currency}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CountryPageInfo;
