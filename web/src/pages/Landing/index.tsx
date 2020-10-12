import React from 'react';
import { FiArrowRight } from 'react-icons/fi'
import {
  Container,
  ContentWrapper,
  LocationWrapper,
  Anchor,
  Main
} from './styles'

import logoImg  from '../../images/logo.svg'

const Landing = () => {
  return (
    <Container>
      <ContentWrapper>
        <img src={logoImg} alt="logo"/>

        <Main>
          <h1>Leve felicidade para o mundo!</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </Main>

        <LocationWrapper>
          <strong>Recife</strong>
          <span>Pernambuco</span>
        </LocationWrapper>

        <Anchor to='/app'>
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Anchor>
      </ContentWrapper>
    </Container>
  );
};

export default Landing;