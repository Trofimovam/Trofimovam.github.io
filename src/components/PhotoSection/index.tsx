import React from "react";
import DateIcon from "./dateIcon.svg";
import { Container, TextName, Image,  HeaderImg } from "./styled";
import headerVetki from "./headerVetki.jpg";

export default function PhotoSection() {
  return (
    <Container>
      <HeaderImg src={headerVetki} />
      <TextName>Александр и Анастасия</TextName>
      <Image src={DateIcon} alt='dateicon' />
    </Container>
  );
}
