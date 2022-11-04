import Header from "./components/Header";
import styled from "styled-components";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from './pages/New';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem('auth');

    if (isAuth) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  return (
    <Router>
      <Wrapper>
        <Header />
        <Main>
          <Routes>
            <Route path='/posts' element={<Home />} />
            {/* <Router path='/posts/:id' element={<Edit />} /> */}
            <Route path='/login' element={<Login setAuth={setAuth}/>}/>
            <Route path='/new' element={<New />} />
          </Routes>
        </Main>
      </Wrapper>
    </Router>
  );
}

const Wrapper = styled.div`
  margin: 15px;
  padding: 15px;
`;

const Main = styled.main`
  margin-top: 50px;
`;

export default App;
