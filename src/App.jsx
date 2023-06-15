import { Container } from "react-bootstrap";
import Accordions from "./components/accordions/Accordions";
import AccordionsWithUseEffect from "./components/accordions-with-useeffect/AccordionsWithUseEffect";

function App() {
  return (
    <Container fluid className="my-5">
      <Container>
        <Accordions />
      </Container>
    </Container>
  );
}

export default App;
