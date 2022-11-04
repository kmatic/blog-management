import { useState } from "react";
import styled from "styled-components";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Form>
            <h2>Login</h2>
            <div>
                <label><b>Username: </b></label>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <label><b>Password: </b></label>
                <input type='text' value={password} onChange={(e) => setPassword(e.target.value)}/>
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