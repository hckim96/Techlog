import React, { useState } from 'react'
import axios from 'axios'
import bcrypt from 'bcryptjs';
import './SignupPage.css'
export const SignupPage = (props) => {
    const [data, setData] = useState({
        userId: '',
        userName: '',
        email: '',
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
        axios.post('/signup', formData)
            .then(res => console.log(res))
            
        window.location = '/';
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
                <label for="userName" class="sr-only">Email address</label>
                <input value = {data.userName}
                        name = "userName"
                        className="form-control mb-2"
                        onChange = {updateField}
                        placeholder = "userName" required>
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
