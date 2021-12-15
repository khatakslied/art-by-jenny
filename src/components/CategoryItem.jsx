import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  flex: 1;
  margin: 4px;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 50%;
`;
const Info = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h2`
  color: #ECEAEB;
  font-size: 1.6rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  font-weight: bold;
  text-shadow: 0 0 2px #412D26;
  margin: 8px;
`;
const Button = styled.button`
  border: none;
  border-radius: 1px;
  padding: 8px;
  font-size: 1.2rem;
  background-color: #ECEAEB;
  color: #111111;
  cursor: pointer;
  box-shadow: 0 0 1px #412D26;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.image}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>See More</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
