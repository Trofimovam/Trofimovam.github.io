import React from "react";
import { CursiveText, HeadContainer, StyledLink } from "./styled";

export default function Header() {
  return (
    <HeadContainer>
      <StyledLink href='#toTop'>На верх</StyledLink>
      <StyledLink href='#aboutUs'>О нас</StyledLink>
      <CursiveText>A & A</CursiveText>
      <StyledLink href='#venue'>Место проведения</StyledLink>
      <StyledLink href='#invitation'>Приглашение</StyledLink>
    </HeadContainer>
  );
}
