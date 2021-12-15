import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingBasketOutlined } from '@material-ui/icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 8px;
  min-width: 180px;
  height: 240px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
`;
const Icon = styled.div`
`;

const Product = ({item}) => {
  return (
  <Container>
    <Image src={item.image} />
    <Info>
      <Icon>
        <ShoppingBasketOutlined />
      </Icon>
      <Icon>
        <Search />
      </Icon>
    </Info>
  </Container>
  );
};

export default Product;
