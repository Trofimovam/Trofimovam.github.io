import React from "react";
import { ButtonLink, Title, Text, Container } from "./styled";

export default function Venue() {
  return (
    <Container id='venue'>
      <Title>Место регистрации</Title>
      <Text>город Саранск, улица Советская д. 47А</Text>
      <ButtonLink href='https://yandex.ru/maps/-/CCURM8rVdD' target='blank'>
        Показать на карте
      </ButtonLink>
      <Title>Место торжества</Title>
      <Text>город Саранск, улица Коммунистическая д. 35</Text>
      <Text>Мы будем ждать Вас в 16:00</Text>
      <ButtonLink href='https://yandex.ru/maps/-/CCURM8GfdB' target='blank'>
        Показать на карте
      </ButtonLink>
    </Container>
  );
}
