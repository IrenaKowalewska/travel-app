import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '90%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
       margin: '0',
    },
    margin: '2rem 0.5rem',
    boxShadow: 'none',
  },
  title: {
    fontWeight: 600,
    fontSize: '1.1rem',
    margin: '1.8rem 0 1.5rem',
    [theme.breakpoints.down('xs')]: {
      margin: '0 0 1rem 0',
    },
  },
  bold: {
    fontWeight: 600,
  },
  text: {
    margin: '1.5rem 0',
    [theme.breakpoints.down('xs')]: {
      margin: '1rem 0 0',
    },
  },
}));

// function CountryPageInfo({country, capital, countryImg}) {
function CountryPageInfo() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        // alt={`${country} image`}
        alt="image"
        // height="20%"
        // image={`assets/countryImg/${countryImg}`}
        image={`assets/countryImg/egypt.jpg`}
        // title={`${country} image`}
      />
      <CardContent>
        <Typography
          className={classes.title}
          color="textPrimary"
          component="h2"
        >
          Мальдивская Республика
        </Typography>
        <Typography className={classes.bold} color="textPrimary" component="p">
          Столица — Мале
        </Typography>
        <Typography className={classes.bold} color="textPrimary" component="p">
          Население — 402 тысячи человек
        </Typography>
        <Typography className={classes.bold} color="textPrimary" component="p">
          Религия — ислам
        </Typography>
        <Typography className={classes.bold} color="textPrimary" component="p">
          Официальный язык — дивехи
        </Typography>
        <Typography className={classes.bold} color="textPrimary" component="p">
          Валюта – мальдивская руфия
        </Typography>
        <Typography className={classes.text} color="textPrimary" component="p">
          Это одно из самых красивых мест планеты с отлично организованной
          инфраструктурой. Основное развлечение здесь - дайвинг. Также райские
          острова предлагают туристам посмотреть огромное количество
          архитектурных и исторических памятников.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CountryPageInfo;
