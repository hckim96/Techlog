import React, { useState } from 'react'
import axios from 'axios'


export const WritePage = (props) => {
    const [input, setInput] = useState({
        title: "",
        author: "",
        body: "",
    })
    const writePost = () => {
        let jwtToken = localStorage.getItem("JWT_TOKEN");
        if (jwtToken != null) {
            axios.post("/v1/api/write", input,{headers:{"X-AUTH-TOKEN": `${jwtToken}`}})
            .then(res => console.log(res))
            .catch(res => console.log(res))
            props.history.push("/");

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
    return (
        <div className = "container">
            <div>
                <form className="was-validated">
                <div className="mb-3">
                    <label >Textarea</label>
                    <textarea name = "body" value = {input.body} onChange = {updateField} className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                    <div className="invalid-feedback">
                    Please enter a message in the textarea.
                    </div>
                </div>
                </form>
            </div>
            <button className = "btn btn-primary float-right" onClick = {writePost}>
                write
            </button>
        </div>
    )
}
