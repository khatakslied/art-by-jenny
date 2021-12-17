import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingBasketOutlined } from "@material-ui/icons"
import { Badge } from "@material-ui/core"
import artbyjennytitle from "../images/titles/artbyjennytitle.png"

const Container = styled.div`
  height: 72px;
  background-color: #412D26;
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
  align-items: center;
`;

const Logo = styled.img`
  // object-fit: contain;
  height: 60px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #111111;
  border-radius: 1px;
  padding: 4px;
  background-color: #FFFFFF;
`;

const Input = styled.input`
  border: none;
  background-color: #FFFFFF;
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
  text-shadow: 0 0 1px #FFFFFF;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src={artbyjennytitle}/>
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
