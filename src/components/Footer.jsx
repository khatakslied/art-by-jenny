import React from 'react';
import styled from 'styled-components';
import { Instagram } from '@material-ui/icons';

const Container = styled.div`
  display: flex;
  background-color: #ECEAEB;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 24px;
  justify-content: flex-start;
  align-items: center;
`;

const LogoText = styled.div`

`;

const Description = styled.div`
  margin: 8px;
  font-size: 0.6rem;
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

const SocialIcon = styled.div`
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
      <Center>
      </Center>
      <Right>
        <SocialIcon>
          <Instagram />
        </SocialIcon>
      </Right>
    </Container>
  );
};

export default Footer;
