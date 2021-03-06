import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import React, { useState} from 'react';
import styled from 'styled-components';
import { slides } from '../data.js';

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
  transition: 1s;
  transform:translateX(${props=> props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${props=> props.bkgrd};
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    height: 60%;
  }
  flex: 2;
  margin: 32px;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;

const InfoContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  flex: 1;
  margin: 32px;
`;

const Title = styled.h2`
  color: #ECEAEB;
  font-size: 2.2rem;
  font-weight: bold;
  text-shadow: 0 0 2px #412D26;
`;

const Description = styled.p`
  font-weight: lighter;
  margin: 16px 0;
  text-shadow: 0 0 1px #412D26;
`;

const Button = styled.button`
  border: none;
  border-radius: 1px;
  padding: 8px;
  font-size: 1.2rem;
  background-color: #412D26;
  color: #FEFEFE;
  cursor: pointer;
  box-shadow: 0 0 1px #412D26;
  transition: 0.5s;

  &:hover{
    background-color: #161413;
    transform: scale(1.1)
  }
`;


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (side) => {
    if(side === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 1)
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex+1 : 0)
    }
  };

  return (
    <Container>
      <Arrow side="left" onClick={() => handleClick("left")}>
        <ArrowLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slides.map((slide)=>(
        <Slide bkgrd={slide.bkgrd} key={slide.id}>
          <ImageContainer>
            <Image src={slide.image} />
          </ImageContainer>
          <InfoContainer>
            <Title>{slide.title}</Title>
            <Description>{slide.description}</Description>
            <Button>Buy Now</Button>
          </InfoContainer>
        </Slide>
        ))}
      </Wrapper>
      <Arrow side="right" onClick={() => handleClick("right")}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
