import React from "react";
import { ContactContainer, Container, Name, Photo, Title, Vk } from "./styled";
import Dmitrii from "./Dmitrii.png";
import Ksenia from "./Ksenia.png";

export default function Contacts() {
  return (
    <Container>
      <Title>Контакты</Title>
      <ContactContainer>
        <Name>Ведущий:</Name>
        <Photo src={Dmitrii} alt='Дмитрий'></Photo>
        <Name>Дмитрий Сапожников</Name>
        <Vk target='blank' href='https://vk.com/anaxel'>
          Vk
        </Vk>
      </ContactContainer>
      <ContactContainer>
        <Name>Организатор:</Name>
        <Photo src={Ksenia} alt='Ксения'></Photo>
        <Name>Ксения Воробьёва</Name>
        <Vk target='blank' href='https://vk.com/vorobeva_wedding'>
          Vk
        </Vk>
      </ContactContainer>
    </Container>
  );
}
