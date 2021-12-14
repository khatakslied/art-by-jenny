import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
`
const SearchContainer = styled.div`

`

const Center = styled.div`
  flex: 1;
`
const Right = styled.div`
  flex: 1;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            hello
          </SearchContainer>
        </Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
