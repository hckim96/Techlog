import React, { useState } from 'react'
import axios from 'axios'
import './SignupPage.css'
const API_URL = "/v1/api"
export const SignupPage = (props) => {
    const [data, setData] = useState({
        userId: "",
        username: "",
        email: "",
        password: ""
    });
    const updateField = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(API_URL + "/signup", data)
            .then(res => console.log(res))
            
        props.history.push("/");
    };
    return (
        <div className = "d-flex text-center vh-100">
            <form method = "post" onSubmit = {handleSubmit} className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
                <label for="userId" class="sr-only">user id</label>
                <input value = {data.userId}
                        type = "id"
                        name = "userId"
                        className="form-control mb-2"
                        onChange = {updateField}
                        placeholder = "userId" required autoFocus>
                </input>
                <label for="username" class="sr-only">Email address</label>
                <input value = {data.username}
                        name = "username"
                        className="form-control mb-2"
                        onChange = {updateField}
                        placeholder = "username" required>
                </input>
                <label for="password" class="sr-only">Email address</label>
                <input value = {data.password}
                        type = "password"
                        name = "password"
                        className="form-control mb-2"
                        onChange = {updateField}
                        placeholder = "password" required>
                </input>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input value = {data.email}
                        type = "email"
                        name = "email"
                        className="form-control mb-2"
                        onChange = {updateField}
                        placeholder = "email" required>
                </input>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
            </form>
        </div>
    )
}
