import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export const WritePage = (props) => {
    const [input, setInput] = useState({
        title: "",
        author: "",
    })

    const [value, setValue] = useState('');

    useEffect(() => {
        let jwtToken = localStorage.getItem("JWT_TOKEN");
            if (jwtToken != null) {
                axios.get("/v1/api/whoami", {headers:{"X-AUTH-TOKEN": `${jwtToken}`}})
                    .then(({data}) => setInput({...input, author: data}))
            }
    },[])

    const writePost = () => {
        let jwtToken = localStorage.getItem("JWT_TOKEN");
        if (jwtToken != null) {
            if (input.title === "") {
                alert("input title");
            } else if (value === "") {
                alert("input body");
            } else {
                axios.post("/v1/api/write", {...input, body: value},{headers:{"X-AUTH-TOKEN": `${jwtToken}`}})
                .then(res => props.history.push("/"))
                .catch(res => console.log(res))
            }
            

        } else {
            console.log("jwtToken is null");
            alert("fail to write");
        }

    }
    const updateField = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const quillOnChange = (e) => {
        console.log(e);
         setValue(e);
    }
    return (
        <div className = "container d-flex flex-column vh-100 py-5">
            <div className = "d-flex flex-column flex-grow-1">
                <input value = {input.title}
                        name = "title"
                        className="form-control form-control-lg mb-2 "
                        onChange = {updateField}
                        placeholder = "Input title..." required autoFocus>
                </input>
                <ReactQuill placeholder = "input body..." theme="snow" value={value} onChange={quillOnChange} style ={{flexGrow : "1"}}
                    modules = {{
                        toolbar: 
                        [
                          [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                          [{size: []}],
                          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                          [{'list': 'ordered'}, {'list': 'bullet'}, 
                           {'indent': '-1'}, {'indent': '+1'}],
                          ['link', 'image', 'video'],
                          ['clean']
                        ]
                        ,
                        clipboard: {
                          // toggle to add extra line breaks when pasting HTML:
                          matchVisual: false,
                        }
                      }}
                    formats = {[
                        'header', 'font', 'size',
                        'bold', 'italic', 'underline', 'strike', 'blockquote',
                        'list', 'bullet', 'indent',
                        'link', 'image', 'video','code-block'
                      ]}
                />
            </div>
            <div className = "mt-5 w-100 p-3">
                <button className = "btn btn-primary float-right p" onClick = {writePost}>
                    write
                </button>
            </div>
        </div>
    )
}
