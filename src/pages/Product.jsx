import React from 'react';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import testImage from '../images/popular/medium-striped-pumpkin.png'
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div`
`;

const Wrapper = styled.div`
  display: flex;
  padding: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 24px;
`;

const Title = styled.h2`
`;

const Description = styled.p`
  margin: 16px 0;
`;
const Price = styled.p`
  margin: 16px 0;
  font-weight: bold;
  font-size: 1.4rem;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
    font-size: 1.2rem;
`;

const Amount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 1px;
  background-color: #412D26;
  color: #FEFEFE;
  box-shadow: 0 0 1px #412D26;
`;

const Button = styled.button`
  border: none;
  border-radius: 1px;
  padding: 8px;
  font-size: 1.2rem;
  background-color: #412D26;
  color: #FEFEFE;
  cursor: pointer;
  box-shadow: 0 0 1px #412D26;
  white-space: nowrap;
  transition: 0.5s;

  &:hover{
    background-color: #161413;
    transform: scale(1.1)
  }
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={testImage} />
        </ImageContainer>
        <InfoContainer>
          <Title>Product Name</Title>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, culpa reiciendis, soluta dicta quis unde doloribus optio praesentium quidem debitis perspiciatis velit fugit eveniet sed fuga rerum. Libero, eum quo.</Description>
          <Price>$10</Price>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
