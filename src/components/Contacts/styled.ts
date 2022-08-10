import styled from "styled-components";

export const Vk = styled.a``;
export const Name = styled.p``;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 1;
`;

export const Title = styled.p`
  font-family: "BrushScriptMt";
  font-size: 35px;
  margin: 0 0 15px 0;
  width: 100%;
  text-align: center;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

  & > a {
    padding: 0 0 10px 0;
    color: unset;
    z-index: 1;
  }
`;

export const Photo = styled.img`
  width: 150px;
  height: 150px;
  border: 1px solid black;
  border-radius: 50%;
`;
