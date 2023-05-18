import styled from "styled-components";
import Home from "./components/page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = styled.div`
  width: 100%;
`;

function App() {
  return (
    <Main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Main>
  );
}

export default App;
