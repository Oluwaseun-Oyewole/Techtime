import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import tw from "twin.macro";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const Container = styled.div`
  ${tw``}
`;
function App() {
  return (
    <Container>
      <Navbar />
      <Home />
      <Footer />
    </Container>
  );
}

export default App;
