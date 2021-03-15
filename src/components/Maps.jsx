import React from 'react';
import {
  YMaps,
  Map,
  Placemark,
  ZoomControl,
  TypeSelector,
} from 'react-yandex-maps';
import { LangContext } from '../App';

const Maps = ({ lat, lng }) => {
  const lang = React.useContext(LangContext);
  console.log(lang);
  const mapData = {
    center: [lat, lng],
    zoom: 5,
  };

  return (
    <div>
      <YMaps>
        <Map defaultState={mapData} width="100%" height="500px">
          <ZoomControl />
          <TypeSelector />
          <Placemark
            geometry={mapData.center}
            options={{
              iconLayout: 'default#image',
              iconImageHref: 'assets/marker.png',
              iconImageSize: [30, 42],
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default Maps;
