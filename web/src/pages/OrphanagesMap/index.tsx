import React from 'react';
import {
  Container,
  Aside,
  CreateOrphanageLink
} from './styles'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../../images/mapmarker.svg'

const OrphanageMap = () => {
  return (
    <Container>
      <Aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :{')'}</p>
        </header>

        <footer>
          <strong>Recife</strong>
          <span>Pernambuco</span>
        </footer>
      </Aside>

      <Map
        center={[-8.042919,-34.899075]}
        zoom={15}
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      </Map>

      <CreateOrphanageLink to="/">
        <FiPlus size={32} color="#FFF" />
      </CreateOrphanageLink>
    </Container>
  );
};

export default OrphanageMap;