import React from 'react';
import styled from 'styled-components';
import { Instagram } from '@material-ui/icons';
import artbyjennyfooter from "../images/titles/artbyjennyfooter.png";

const Container = styled.div`
  display: flex;
  background-color: #ECEAEB;
`;

const Left = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  padding: 24px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  max-height: 24px;
  max-width: 100%;
`;

const Description = styled.div`
  margin: 8px;
  font-size: 0.6rem;
`;

const Center = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const Title = styled.h3`
  margin: 8px;
  font-size: 1rem;
  white-space: nowrap;
`;

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
    @media (max-width: 768px) {
      flex-direction: column;
  }
`;

const ListItem = styled.li`
  margin: 4px;
  font-size: 0.8rem;
`;


const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const SocialIcon = styled.div`
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo src={artbyjennyfooter}/>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Description>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Contact</ListItem>
          <ListItem>Basket</ListItem>
          <ListItem>FAQs</ListItem>
          <ListItem>Legal</ListItem>
        </List>
      </Center>
      <Right>
        <SocialIcon>
          <Instagram fontSize="large"/>
        </SocialIcon>
      </Right>
    </Container>
  );
};

export default Footer;
