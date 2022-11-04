import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const Post = ({ post }) => {
    return (
        <PostWrapper>
            <IconWrapper>
                <FontAwesomeIcon icon={faPen} />
                <FontAwesomeIcon icon={faTrash} />
            </IconWrapper>
            <Div>
                <h3>{post.title}</h3>
                <p>{post.text}</p>
            </Div>
        </PostWrapper>
    )
}

const PostWrapper = styled.div`
    position: relative;
    border: 2px solid lightgray;
    border-radius: 10px;
    max-width: 420px;
    overflow: hidden;
`;

const Div = styled.div`
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 300px;

    > h3, p {
        margin: 15px;
    }
`;

const IconWrapper = styled.div`
    position: absolute;
    top: 10px;
    right: 40px;
    display: flex;
    gap: 25px;
    background: lightgray;
    padding: 10px;
    border-radius: 8px;
`;

export default Post;