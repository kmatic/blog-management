import Header from './components/Header';
import styled from 'styled-components';
import Login from './pages/Login';
import Home from './pages/Home';
import Edit from './pages/Edit';
import New from './pages/New';
import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
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
        <Router basename="/">
            <Wrapper>
                <Header auth={auth} setAuth={setAuth} />
                <Main>
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate replace to="/posts" />}
                        />
                        <Route
                            path="/posts"
                            element={
                                !auth ? (
                                    <Navigate replace to="/login" />
                                ) : (
                                    <Home />
                                )
                            }
                        />
                        <Route
                            path="/posts/:id"
                            element={
                                !auth ? (
                                    <Navigate replace to="/login" />
                                ) : (
                                    <Edit />
                                )
                            }
                        />
                        <Route
                            path="/login"
                            element={<Login setAuth={setAuth} auth={auth} />}
                        />
                        <Route
                            path="/new"
                            element={
                                !auth ? (
                                    <Navigate replace to="/login" />
                                ) : (
                                    <New />
                                )
                            }
                        />
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
