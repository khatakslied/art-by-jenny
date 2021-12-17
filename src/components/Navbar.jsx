import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingBasketOutlined } from "@material-ui/icons"
import { Badge } from "@material-ui/core"
import artbyjennytitle from "../images/titles/artbyjennytitle.png"

const Container = styled.div`
  background-color: #412D26;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled.img`
  max-height: 60px;
  max-width: 100%;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex: 0 0 100%;
    order: 2;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  border: 2px solid #111111;
  border-radius: 1px;
  padding: 4px;
  background-color: #FFFFFF;
  margin: 8px;
`;

const Input = styled.input`
  width: 100%;
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
  color: #FEFEFE;
  cursor: pointer;
  margin: 8px;
  text-shadow: 0 0 1px #161413;
  white-space: nowrap;
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
              <ShoppingBasketOutlined style={{color: "#FEFEFE"}}/>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
