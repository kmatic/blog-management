import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Post = ({ post, handleDelete }) => {
    return (
        <PostWrapper>
            <IconWrapper>
                <button>
                    <FontAwesomeIcon icon={faPen} />
                </button>
                <button onClick={(e) => handleDelete(e, post._id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </IconWrapper>
            <Div>
                <h3>{post.title}</h3>
                <p>{post.text}</p>
            </Div>
        </PostWrapper>
    );
};

const PostWrapper = styled.div`
    position: relative;
    border: 2px solid lightgray;
    border-radius: 10px;
    max-width: 950px;
    overflow: hidden;
`;

const Div = styled.div`
    overflow-x: hidden;
    overflow-y: auto;
    height: 300px;

    > h3,
    p {
        margin: 15px;
    }
`;

const IconWrapper = styled.div`
    position: absolute;
    bottom: 10px;
    right: 25px;
    display: flex;
    gap: 15px;

    > button {
        background: lightgray;
        border-radius: 8px;
        padding: 4px 8px;
        cursor: pointer;
    }
`;

export default Post;
