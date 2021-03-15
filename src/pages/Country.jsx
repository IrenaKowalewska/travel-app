import React from 'react';
import Container from '@material-ui/core/Container';
import { Box, makeStyles } from '@material-ui/core';
import { Player, BigPlayButton } from 'video-react';
import CountryPageInfo from '../components/CountryPageInfo';

import { Weather } from '../components/Weather';
import { Currency } from '../components/Currency';

import Maps from '../components/Maps';
import DateWidget from '../components/DateWidget';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1300,
    marginBottom: '1rem',
  },
  info: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  info_left: {
    flex: '1 1 70%',
    [theme.breakpoints.down('sm')]: {
      flex: '1 1 100%',
    },
  },
}));

function Country({
  url,
  country,
  capital,
  countryImg,
  population,
  religion,
  language,
  currency,
  lat,
  lng,
  id,
  currencyCode,
  timeZone,
}) {
  const classes = useStyles();
  return (
    <Box bgcolor="primary.light">
      <Container className={classes.root}>
        <div className={classes.info}>
          <div className={classes.info_left}>
            <CountryPageInfo
              country={country}
              capital={capital}
              countryImg={countryImg}
              population={population}
              religion={religion}
              language={language}
              currency={currency}
            />
            <div>slider</div>
          </div>
          <div className={classes.info_right}>
            <div>
              <Weather id={id} />
            </div>
            <DateWidget url={url} timeZone={timeZone} />
            <div>
              <Currency code={currencyCode} currencyName={currency} />
              {/* 8ed0e057e6cb73e8e4e8f6b9 */}
            </div>
          </div>
        </div>
        <Player playsInline poster={`/assets/posters/${url}.jpg`}>
          <source src={`assets/videos/${url}.mp4`} />
          <BigPlayButton position="center" />
        </Player>
      </Container>
      <Maps lat={lat} lng={lng} />
    </Box>
  );
}

export default Country;
