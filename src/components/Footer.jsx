import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: #ECEAEB;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LogoText = styled.div`

`;

const Description = styled.div`

`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <LogoText>
          ART by Jenny
          </LogoText>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem voluptatibus id corporis corrupti blanditiis saepe mollitia esse sed, sequi ea.
        </Description>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
