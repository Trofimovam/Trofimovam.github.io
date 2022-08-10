import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 100px 20px;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const Title = styled.p`
  width: 30%;
  text-align: center;
  font-size: 60px;
  font-family: "BrushScriptMt";
  margin-right: 32px;
  z-index: 1;
  white-space: nowrap;

  @media (max-width: 391px) {
    font-size: 30px;
    margin-right: 20px;
    width: 40%;
  }
`;

export const Text = styled.p`
  z-index: 1;
  line-height: 150%;
`;
