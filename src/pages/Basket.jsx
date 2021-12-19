import React from 'react';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 24px;
`;

const Title = styled.h2`
  text-align: center;
`;

const Top = styled.div`

`;

const Bottom = styled.div`

`;

const Basket = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Basket</Title>
        <Top></Top>
        <Bottom></Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Basket;
