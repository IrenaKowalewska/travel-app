import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import img from '../assets/images/countries/maldives.jpg';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
  root: {
    width: 255,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
    margin: '2rem 0.5rem',
    [theme.breakpoints.between('lg','sm')]: {
      margin: '2rem 1rem',
    },
  },
  bold: {
    fontWeight: 600,
    fontSize: '1.1rem',
  },
}));

function ImageCard() {
  const classes = useStyles();

  return (
    <NavLink exact to="/country">
    <Card className={classes.root} >
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
          <Typography
            color="textPrimary"
            component="p"
          >
            Мале
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </NavLink>
  );
}

export default ImageCard;
