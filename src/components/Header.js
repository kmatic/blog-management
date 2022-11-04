import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = ({ userAuth }) => {
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
                        <li>
                            <StyledLink to='/login'>Login</StyledLink>
                        </li>
                        <li>
                            <StyledLink to='/logout'>Logout</StyledLink>
                        </li>
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

export default Header;