import React from 'react';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import testImage from '../images/popular/medium-striped-pumpkin.png'

const Container = styled.div`
`;

const Wrapper = styled.div`
  min-height: 60vh;
  padding: 24px;
`;

const Title = styled.h2`
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
`;

const TopButton = styled.button`
  border: none;
  border-radius: 1px;
  padding: 8px;
  font-size: 1rem;
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

const TopText = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ECEAEB;
  margin: 8px 0;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  align-self: center;
  margin:8px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  justify-content: space-around;
`;

const ProductName = styled.div`
  padding: 4px;
`;
const ProductColour = styled.div`
  padding: 4px;
`;
const ProductSize = styled.div`
  padding: 4px;
`;

const Numbers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

const Amount = styled.div`
  display: flex;
  align-items: center;
`;

const ProductAmount = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 4px;
`;

const Price = styled.div`
  font-size: 1.2rem;
`;

const Summary = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const SummaryTitle = styled.h3`
  padding: 8px;
  font-size: 1rem;
  font-weight: normal;
`;

const Total = styled.h3`
  padding: 8px;
`;

const Basket = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Basket</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopText>Items (0)</TopText>
          <TopButton>Checkout</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <Image src={testImage} />
              <Details>
                <ProductName><b>Item:</b> Product Name</ProductName>
                <ProductColour><b>Colour:</b> Product Colour</ProductColour>
                <ProductSize><b>Size:</b> Product Size</ProductSize>
              </Details>
              <Numbers>
                <Amount>
                  <Remove />
                  <ProductAmount>1</ProductAmount>
                  <Add />
                </Amount>
                <Price>
                  $100
                </Price>
              </Numbers>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Subtotal</SummaryTitle>
            <Total>$100</Total>
            <SummaryTitle>Postage</SummaryTitle>
            <Total>$10</Total>
            <SummaryTitle>Total</SummaryTitle>
            <Total>$110</Total>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Basket;
