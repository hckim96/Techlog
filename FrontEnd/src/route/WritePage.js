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

            axios.post("/v1/api/write", input,{headers:{"X-AUTH-TOKEN": `${jwtToken}`}})
            .then(res => props.history.push("/"))
            .catch(res => console.log(res))
            

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
        <div className = "container mt-5 vh-100">
            <div className = "mt-5 h-75">
                <form>
                <label >Title</label>

                <input value = {input.title}
                        name = "title"
                        className="form-control form-control-lg mb-2 "
                        onChange = {updateField}
                        placeholder = "Input title..." required autoFocus>
                </input>
                <div className="mb-3">
                    <label >Body</label>
                    {/* <textarea name = "body" value = {input.body} onChange = {updateField} className="form-control "  placeholder="Input body..." required></textarea> */}
                    <ReactQuill theme="snow" name = "body" value={value} onChange={quillOnChange}/>
                </div>
                </form>

            </div>
            <div className = "mb-0 ">
                <button className = "btn btn-primary float-right" onClick = {writePost}>
                    write
                </button>

            </div>
        </div>
    )
}
