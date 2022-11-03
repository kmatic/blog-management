import Header from "./components/Header";
import styled from "styled-components";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Edit from "./pages/Edit";

function App() {
  return (
    <Wrapper>
      <Header />
      <main>
        <Login />
        <Home />
        <Edit />
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 15px;
  padding: 15px;
`;

export default App;
