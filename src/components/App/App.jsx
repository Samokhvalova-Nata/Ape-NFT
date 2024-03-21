import { Hero } from "components/Hero";
import { Header } from "../Header";
import { Container } from "./App.styled";
import { About } from "components/About";
import { MindMap } from "components/MindMap";

export const App = () => {
  return (
    <Container>
      <Header />
      <main>
        <Hero />
        <About />
        <MindMap/>
      </main>
    </Container>
  );
};
