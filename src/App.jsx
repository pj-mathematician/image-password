import "./App.css";
import Header from './components/Header'
import Container from "./components/Container";
import Demo from "./components/Demo";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Demo />
      </Container>
    </div>
  );
}

export default App;
