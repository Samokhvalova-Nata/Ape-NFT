import { Hero } from "components/Hero";
import { Header } from "../Header";
import { Container } from "./App.styled";
import { About } from "components/About";
import { MindMap } from "components/MindMap";
import { FAQ } from "components/FAQ";
import { Arts } from "components/Arts";
import { ContactUs } from "components/ContactUs";
import { Toaster } from "react-hot-toast";
import { Footer } from "components/Footer";

export const App = () => {
  return (
    <>
    {/* <Container> */}
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
    {/* </Container> */}
    </>
  );
};
