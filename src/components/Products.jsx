import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #AF8167;
  font-weight: lighter;
  text-shadow: 0 0 1px #412D26;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      <Title>Popular Items</Title>
      <ItemsContainer>
        {popularProducts.map(item=>(
          <Product item={item} key={item.id}/>
        ))}
      </ItemsContainer>
    </Container>
  );
};

export default Products;
