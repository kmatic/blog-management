import { useState } from "react";
import styled from "styled-components";

const Login = ({ setAuth }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('https://ghostly-zombie-21867.herokuapp.com/api/login', {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            });
            if (res.status !== 200) return console.error('Wrong username or password');
            const data = await res.json();
            localStorage.setItem('auth', true);
            localStorage.setItem('token', data.token);
            setAuth(true);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <h2>Login</h2>
            <div>
                <label><b>Username: </b></label>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <label><b>Password: </b></label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <Btn><b>Login</b></Btn>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 15px;
    gap: 15px;
    align-items: center;

    input, textarea {
        padding: 3px;
    }
`;

const Btn = styled.button`
    padding: 3px 20px;
    border-radius: 5px;
    border: 2px solid black;
    background: white;

    :hover {
        color: white;
        background: black;
    }
`;

export default Login;