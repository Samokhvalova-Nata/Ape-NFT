import { Toaster } from "react-hot-toast";
import { Header } from "sections/Header";
import { Hero } from "sections/Hero";
import { About } from "sections/About";
import { MindMap } from "sections/MindMap";
import { FAQ } from "sections/FAQ";
import { Arts } from "sections/Arts";
import { ContactUs } from "sections/ContactUs";
import { Footer } from "sections/Footer";
import { Container } from "./App.styled";

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <About />
        <MindMap />
        <FAQ />
        <Arts />
        <ContactUs/>
      </Container>
      <Footer/>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
