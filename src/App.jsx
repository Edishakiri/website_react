import styled, { css } from "styled-components";
import Feature from "./components/Feature";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Container = styled.div`
    height: 99vh;
    overflow: hidden;
    position: relative;
  `

  const Shape = css`
  width: 100%;
  height: 99%;
  position: absolute;
  top: 0;
  letf: 0;
  z-index: -1;
  `

const IntroShape = styled.div `
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%); 
  background-color: green;
  
`;

const FeatureShape = styled.div `
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%); 
  background-color: rgb(129, 248, 180);
  
`

const ServiceShape = styled.div `
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%); 
  background-color: rgb(63, 194, 119);
  
`

const PriceShape = styled.div `
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%); 
  background-color: rgb(32, 133, 76);
  
`

const App = () => {

  const smallScreen = window.screen.width <= 480 ? true : false;
  return ( 
    <>
      <Container>
        <Navbar/>
        <Intro/>
        <IntroShape/>
      </Container>
      <Container>
        <Feature/>
        <FeatureShape/>
      </Container>
      <Container>
        <Service/>
        {!smallScreen && <ServiceShape/>}
      </Container>
      <Container>
        <Price />
        <PriceShape/>
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
  </>
  )
};

export default App;