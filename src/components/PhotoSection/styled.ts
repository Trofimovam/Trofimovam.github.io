import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px 0 0 0;
  position: relative;
  width: 100%;
`;

export const TextName = styled.span`
  font-family: "BrushScriptMt";
  font-size: 50px;
  line-height: 25px;
  margin: 20px;
  text-align: center;
  z-index: 1;
  @media (max-width: 391px) {
    font-size: 30px;
  }
`;

export const Image = styled.img`
  height: 60px;
  width: 250px;
  z-index: 1;

  @media (max-width: 391px) {
    height: 50px;
    width: 240px;
  }
`;

export const HeaderImg = styled.img`
  opacity: 0.4;
  position: absolute;
  top: -80px;
  z-index: 0;
  width: 100%;
`;
