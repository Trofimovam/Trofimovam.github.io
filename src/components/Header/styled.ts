import styled from "styled-components";

export const HeadContainer = styled.div`
  position: fixed;
  color: black;
  height: 70px;
  top: 0;
  max-width: 1200px;
  width: 100%;
  border-radius: 0 0 8px 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  z-index: 2;

  @media (max-width: 391px) {
    max-width: 391px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: unset;
  color: unset;
  width: 150px;
  text-align: center;
  @media (max-width: 391px) {
    font-size: 12px;
    width: 80px;
  }
`;

export const CursiveText = styled.p`
  font-family: "BrushScriptMt";
  font-size: 30px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 50%;
  @media (max-width: 391px) {
    font-size: 15px;
    width: 40px;
    padding: 5px;
  }
`;
