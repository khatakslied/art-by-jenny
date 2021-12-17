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
  transition: 0.5s;
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
  z-index: 2;
  &:hover + ${Image}{
    filter: brightness(50%);
  }
`;

const Title = styled.img`
    width: 90%;
    z-index: 3;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Info>
        <Title src={item.title} />
      </Info>
      <Image src={item.image}/>
    </Container>
  );
};

export default CategoryItem;
