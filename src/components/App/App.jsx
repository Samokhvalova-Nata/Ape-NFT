import { Hero } from "components/Hero";
import { Header } from "../Header";
import { Container } from "./App.styled";
import { About } from "components/About";
import { MindMap } from "components/MindMap";
import { FAQ } from "components/FAQ";

export const App = () => {
  return (
    <Container>
      <Header />
      <main>
        <Hero />
        <About />
        <MindMap />
        <FAQ/>
      </main>
    </Container>
  );
};
