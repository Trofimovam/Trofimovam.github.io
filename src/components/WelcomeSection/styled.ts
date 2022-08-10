import styled from "styled-components";
import Iframe from "react-iframe";

export const HeadTitle = styled.p`
  font-family: "BrushScriptMt";
  font-size: 40px;
  @media (max-width: 391px) {
    font-size: 35px;
  }
`;

export const Title = styled.p`
  font-family: "BrushScriptMt";
  font-size: 30px;
  @media (max-width: 391px) {
    font-size: 25px;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  width: 350px;
  text-align: center;
  @media (max-width: 391px) {
    font-size: 15px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
  position: relative;

  & > p {
    margin: 15px;
    z-index: 1;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: -15px;
  width: 100%;
  max-width: 918px;
  z-index: 0;
  opacity: 0.7;
  @media (max-width: 391px) {
    display: none;
  }
`;

export const IframeStyle = styled(Iframe)`
  margin: 250px 0 0 0;
  z-index: 1;
`;
