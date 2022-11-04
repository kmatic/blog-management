import styled from 'styled-components';
import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate } from 'react-router-dom';

const New = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    const [postCreated, setPostCreated] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(
                'https://ghostly-zombie-21867.herokuapp.com/api/posts',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        title: title,
                        text: text,
                        author: author,
                    }),
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            if (res.status !== 200)
                return console.error('Something went wrong');
            navigate('/posts');
        } catch (err) {
            console.error(err);
            setPostCreated(false);
        }
    };

    const handleUpdate = (value, editor) => {
        const raw = editor.getContent({ format: 'text' });
        setText(raw);
    };

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <h2>New Post</h2>
            <div>
                <label>
                    <b>Title: </b>
                </label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>
                    <b>Author: </b>
                </label>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <div>
                <label>
                    <b>Text: </b>
                </label>
            </div>
            <div>
                <Editor
                    apiKey="e8076xdkv0i5shv3ywvnk8xeepaldam4m6mdxv8lmfyjyet7"
                    value={text}
                    init={{
                        height: 300,
                        menubar: false,
                    }}
                    toolbar="undo paste"
                    onEditorChange={handleUpdate}
                />
            </div>
            <Btn>
                <b>Create Post</b>
            </Btn>
            {postCreated && (
                <h3>
                    <b>Your post has been created!</b>
                </h3>
            )}
        </Form>
    );
};

const Form = styled.form`
    max-width: 600px;
    margin: 15px auto;
    display: flex;
    flex-direction: column;
    padding: 15px;
    gap: 15px;

    input,
    textarea {
        padding: 3px;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-self: stretch;
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

export default New;
