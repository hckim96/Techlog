import React, { useState } from 'react'
import axios from 'axios'
import bcrypt from 'bcryptjs'
import './SignupPage.css'

const API_URL = "/v1/api";
const LS_JWT_TOKEN = "JWT_TOKEN";

export const SigninPage = (props) => {
    const [data, setData] = useState({
        userId: '',
        password: ''
    });
    const updateField = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(API_URL + '/signin', data)
            .then((res) => {
                if (res.status == 200) {
                    localStorage.setItem(LS_JWT_TOKEN, res.data);
                    console.log("login success!");
                    console.log("res.data is " + res.data);
                    props.history.push("/");
                } else {
                    alert("login failed");
                }
            }).catch((res) => {
                alert("login failed");
            })
            
    };
    return (
        <div className = "d-flex text-center vh-100">
            <form method = "post" onSubmit = {handleSubmit} className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
                <label  className="sr-only">user id</label>
                <input value = {data.userId}
                        type = "id"
                        name = "userId"
                        className="form-control mb-2"
                        onChange = {updateField}
                        placeholder = "userId" required autoFocus>
                </input>
                <label className="sr-only">password</label>
                <input value = {data.password}
                        type = "password"
                        name = "password"
                        className="form-control mb-2"
                        onChange = {updateField}
                        placeholder = "password" required>
                </input>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
        </div>
    )
}
