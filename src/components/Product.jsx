import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingBasketOutlined } from '@material-ui/icons';

const Info = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  align-items: flex-end;
  justify-content: center;
  z-index: 2;
  opacity: 0.5;
  transition: 0.5s;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 8px;
  min-width: 180px;
  height: 240px;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 1px;
`;

const Icon = styled.div`
  display: flex;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  color: #FEFEFE;
  background-color: #C47439;
  border-radius: 50%;
  cursor: pointer;
  margin: 8px;
  transition: 0.5s;

  &:hover{
    background-color: #412D26;
    transform: scale(1.1)
  }
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
