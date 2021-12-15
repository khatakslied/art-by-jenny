import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingBasketOutlined } from "@material-ui/icons"
import { Badge } from "@material-ui/core"

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
  justify-content: flex-start;
`;

const Logo = styled.h1`
  font-weight: normal;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid black;
  padding: 4px;
`;

const Input = styled.input`
  border: none;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  cursor: pointer;
  margin: 8px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>ART by Jenny</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input />
            <Search style={{color: "#666666"}}/>
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Log In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingBasketOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
