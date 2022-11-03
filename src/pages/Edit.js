import styled from "styled-components";
import { useState } from "react";
import { Editor } from '@tinymce/tinymce-react';

const Edit = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');

    return (
        <Form>
            <h2>Edit Post</h2>
            <div>
                <label><b>Title: </b></label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label><b>Author: </b></label>
                <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div>
                <label><b>Text: </b></label>
            </div>
            <div>
                <Editor
                    apiKey='e8076xdkv0i5shv3ywvnk8xeepaldam4m6mdxv8lmfyjyet7'
                    value={text}
                    init={{
                        height: 300,
                        menubar: false
                    }}
                    onEditorChange={(e) => setText(e.target.value)}
                />
            </div>
            <Btn><b>Update</b></Btn>
        </Form>
    )
}

const Form = styled.form`
    max-width: 600px;
    margin: 15px auto;
    display: flex;
    flex-direction: column;
    padding: 15px;
    gap: 15px;

    input, textarea {
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

export default Edit;