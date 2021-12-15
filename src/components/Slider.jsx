import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  overflow: hidden;
`;

const Arrow = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: ${props=> props.side === "left" && "16px"};
  right: ${props=> props.side === "right" && "16px"};
  margin: auto;
  display: flex;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.6;
  background-color: #AF8167;
  border-radius: 1px;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transform:translateX();
`;

const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: ${props=> props.bkgrd};
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;

`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 2;
  padding: 56px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: normal;
`;

const Description = styled.p`
  font-weight: lighter;
  margin: 16px 0;
`;

const Button = styled.button`
  border: none;
  border-radius: 1px;
  padding: 8px;
  font-size: 1rem;
  background-color: #412D26;
  color: #FEFEFE;
  cursor: pointer;
`;


const Slider = () => {

  const handleClick = (direction) => {

  }

  return (
    <Container>
      <Arrow side="left" onClick={() => handleClick("left")}>
        <ArrowLeft />
      </Arrow>
      <Wrapper>
        <Slide bkgrd="#C47439">
          <ImageContainer>
            <Image src="" />
          </ImageContainer>
          <InfoContainer>
            <Title>Product Name</Title>
            <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, temporibus!</Description>
            <Button>Buy Now</Button>
          </InfoContainer>
        </Slide>
        <Slide bkgrd="#702F1B">
          <ImageContainer>
            <Image src="" />
          </ImageContainer>
          <InfoContainer>
            <Title>Product Name</Title>
            <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, temporibus!</Description>
            <Button>Buy Now</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow side="right" onClick={() => handleClick("right")>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
