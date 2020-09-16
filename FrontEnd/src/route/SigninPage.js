import React, { useState } from 'react'
import axios from 'axios'
import bcrypt from 'bcryptjs';
import './SignupPage.css'

const API_URL = "/api"
export const SigninPage = () => {
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
    let formData = new FormData();
    const handleSubmit = (e) => {
        e.preventDefault();
        for (let key in data){
            if (key == "password") {
                formData.append(key, bcrypt.hashSync(data[key], 10))
            } else {
                formData.append(key, data[key]);
            }
        }
        axios.post(API_URL + '/signin', formData)
            .then(res => console.log(res))
            
        // window.location = '/';
    };
    return (
        <div className = "d-flex text-center vh-100">
            <form method = "post" onSubmit = {handleSubmit} className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
                <label for="userId" class="sr-only">user id</label>
                <input value = {data.userId}
                        type = "id"
                        name = "userId"
                        className="form-control mb-2"
                        onChange = {updateField}
                        placeholder = "userId" required autoFocus>
                </input>
                <label for="password" class="sr-only">Email address</label>
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
