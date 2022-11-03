import styled from "styled-components";

const Header = () => {
    return (
        <header>
            <nav>
                <List>
                    <li>
                        <h1>Blog CMS</h1>
                    </li>
                    <li>
                        Home
                    </li>
                    <li>
                        New Post
                    </li>
                </List>
            </nav>
        </header>
    )
}

const List = styled.ul`
    display: flex;
    list-style-type: none;
    gap: 15px;
    align-items: center;
    padding: 15px;
    margin: 15px;
`;

export default Header;