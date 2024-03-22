import { Hero } from "components/Hero";
import { Header } from "../Header";
import { Container } from "./App.styled";
import { About } from "components/About";
import { MindMap } from "components/MindMap";
import { FAQ } from "components/FAQ";
import { Arts } from "components/Arts";
import { ContactUs } from "components/ContactUs";

export const App = () => {
  return (
    <Container>
      <Header />
      <main>
        <Hero />
        <About />
        <MindMap />
        <FAQ />
        <Arts />
        <ContactUs/>
      </main>
    </Container>
  );
};
