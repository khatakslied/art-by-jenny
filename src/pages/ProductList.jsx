import React from 'react';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Footer from '../components/Footer';

const Container = styled.div`

`;

const Title = styled.h2`
  margin: 24px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 24px;
`;

const FilterText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin: 8px;
`;

const Select = styled.select`
  padding: 4px;
  margin: 4px;
`;

const Option = styled.option`
`;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Test</Title>
      <FilterContainer>
        <Filter><FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>Colour</Option>
            <Option>Orange</Option>
            <Option>Gold</Option>
            <Option>Red</Option>
            <Option>Black</Option>
          </Select>
          <Select>
            <Option disabled selected>Size</Option>
            <Option>XL</Option>
            <Option>L</Option>
            <Option>M</Option>
            <Option>S</Option>
            <Option>XS</Option>
          </Select>
        </Filter>
        <Filter><FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>

          </Select>
        </Filter>
      </FilterContainer>
      <Products></Products>
      <Footer></Footer>
    </Container>
  );
};

export default ProductList;
