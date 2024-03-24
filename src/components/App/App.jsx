import { Toaster } from "react-hot-toast";
import { Header } from "components/Header";
import { Hero } from "components/Hero";
import { About } from "components/About";
import { MindMap } from "components/MindMap";
import { FAQ } from "components/FAQ";
import { Arts } from "components/Arts";
import { ContactUs } from "components/ContactUs";
import { Footer } from "components/Footer";
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
