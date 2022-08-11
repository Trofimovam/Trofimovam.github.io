import React from "react";
import {
  HeadTitle,
  Title,
  Text,
  Container,
  IframeStyle,
  Image,
} from "./styled";
import vetochkaWelcome from "./vetochkaWelcome.png";

export default function WelcomeSection() {
  return (
    <Container id='invitation'>
      <Image src={vetochkaWelcome} />
      <HeadTitle>Дорогие гости!</HeadTitle>
      <Title>10 Сентября 2022</Title>
      <Text>
        в нашей жизни произойдет очень важнои и замечательное событие -
      </Text>
      <Title>Наша свадьба</Title>
      <Text>
        Мы верим и надеемся, что это замечательный день станет красивым началом
        долгой и счастливой жизни.
      </Text>
      <Text>
        Позвольте пригласить Вас разделить с нами радость этого дня. Подарите
        нам свою поддержу и добрые пожеланние, а мы поделимся с Вами частичкой
        нашего счастья.
      </Text>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Text>
        Для публикации фотографий с нашей свадьбы воспользуйтесь хэштегом
        #trofimovs_wedding_day это позволит нам насладиться фотографиями в
        свадебном путешествии ♥
        <br />
        <br />
        <br />
        <br />
        Будем благодарны, если Вы воздержитесь от криков «Горько» на празднике,
        ведь поцелуй - знак выражения чувств, он не может быть по заказу.
        Обнимаем ♥♥♥♥
        <br />
        <br />
        <br />
        <br />
        <br />
        Так же мы просим вас не дарить нам цветы, после торжества мы сразу
        уезжаем в долгожданное путешествие и не успеем насладиться этой
        красотой! Но, по желанию, выразить вашу любовь и радость можно в виде
        бутылки вина или шампанского, которое, мы обещаем, не завянет.
      </Text>
      <IframeStyle
        url='https://forms.yandex.ru/u/62dfc678daea029d1fe4b902/?iframe=1'
        name='ya-form-62dfc678daea029d1fe4b902'
        width='390'
      />
    </Container>
  );
}
