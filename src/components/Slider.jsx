import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff3f3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(0vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${props => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  margin-left: 150px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndfex] = useState(0)

    const handleClick = (direction) => {

    }


  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeft />
      </Arrow>
      <Wrapper>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src="https://i.ibb.co/s3xjxFz/kisspng-woman-female-portable-network-graphics-clip-art-fa-zenle-seilmi-png-bayan-resimleri-womens-5.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>MODA VERÃO</Title>
            <Desc>
              NÃO PERCA O ESTILO! GARANTA 30% DE DESCONTO NA NOVA COLEÇÃO.
            </Desc>
            <Button>VER AGORA</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fcf1ed">
          <ImgContainer>
            <Image src="https://i.ibb.co/s3xjxFz/kisspng-woman-female-portable-network-graphics-clip-art-fa-zenle-seilmi-png-bayan-resimleri-womens-5.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>SUCESSO DE VENDAS</Title>
            <Desc>
              NÃO PERCA O ESTILO! GARANTA 30% DE DESCONTO NA NOVA COLEÇÃO.
            </Desc>
            <Button>VER AGORA</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fbf0f4">
          <ImgContainer>
            <Image src="https://i.ibb.co/s3xjxFz/kisspng-woman-female-portable-network-graphics-clip-art-fa-zenle-seilmi-png-bayan-resimleri-womens-5.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>SUCESSO DE VENDAS</Title>
            <Desc>
              NÃO PERCA O ESTILO! GARANTA 30% DE DESCONTO NA NOVA COLEÇÃO.
            </Desc>
            <Button>VER AGORA</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;