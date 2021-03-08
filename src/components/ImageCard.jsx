import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import img from '../assets/images/countries/maldives.jpg';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 255,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
    margin: '2rem 0.5rem',
    [theme.breakpoints.between('lg', 'sm')]: {
      margin: '2rem 1rem',
    },
    boxShadow: '4px 5px 15px 3px rgba(25,105,67,0.81)',
    '&:hover': {
      boxShadow: '3px 4px 13px -2px rgba(25,105,67,0.81)',
    },
  },
  bold: {
    fontWeight: 600,
    fontSize: '1.1rem',
  },
}));

const style = {
  link: {
    textDecoration: 'none',
  },
};

function ImageCard() {
  const classes = useStyles();

  return (
    <NavLink exact to="/country" style={style.link}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="country image" //!!!переопределить, когда будут данные
            height="140"
            // image="/src/assets/images/countries/maldives.jpg"
            image={img}
            title="Сountry image" //!!!переопределить, когда будут данные
          />
          <CardContent>
            <Typography
              className={classes.bold}
              color="textPrimary"
              component="h2"
            >
              Мальдивская Республика
            </Typography>
            <Typography color="textPrimary" component="p">
              Мале
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </NavLink>
  );
}

export default ImageCard;
