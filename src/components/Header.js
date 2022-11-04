import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = ({ auth, setAuth }) => {
    const logout = (e) => {
        e.preventDefault();
        setAuth(false);
        localStorage.clear();
        console.log('sheesh');
    }

    return (
        <header>
            <nav>
                <List>
                    <li>
                        <h1><StyledLink to='/posts'>Blog CMS</StyledLink></h1>
                    </li>
                    <div>
                        <li>
                            <StyledLink to='/posts'>Home</StyledLink>
                        </li>
                        <li>
                            <StyledLink to='/new'>New Post</StyledLink>
                        </li>
                        {!auth && (
                            <li>
                                <StyledLink to='/login'>Login</StyledLink>
                            </li>
                        )}
                        {auth && (
                            <Logout onClick={logout}>
                                Logout
                            </Logout>
                        )}
                    </div>
                </List>
            </nav>
        </header>
    )
}

const List = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    align-items: center;

    > div {
        display: flex;
        gap: 25px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;

    :visited {
        color: black;
    }

    :hover {
        color: blue;
    }
`;

const Logout = styled.button`
    background: inherit;

    :hover {
        color: blue;
    }
`;

export default Header;