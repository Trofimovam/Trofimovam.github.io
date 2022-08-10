import React from "react";
import AboutUs from "./components/AboutUs";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import PhotoSection from "./components/PhotoSection";
import Venue from "./components/Venue";
import WelcomeSection from "./components/WelcomeSection";
import { Container } from "./styled";

export default function App() {
  return (
    <Container id='toTop'>
      <Header />
      <PhotoSection />
      <AboutUs />
      <Venue />
      <Contacts />
      <WelcomeSection />
    </Container>
  );
}
