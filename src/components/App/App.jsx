import { Hero } from "components/Hero";
import { Header } from "../Header";
import { Container } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <Header />
      <main>
        <Hero/>
      </main>
    </Container>
  );
};
