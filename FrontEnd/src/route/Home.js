import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Header } from '../component/Header'
import {PostContainer} from '../component/PostContainer.js';
import { TagContainer } from '../component/TagContainer';
const API_URL = "/v1/api";
const LS_JWT_TOKEN = "JWT_TOKEN";
export const Home = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId,setUserId] = useState("");
    const [userList, setUserList] = useState([
        {
            "userId": "sample",
            "username": "sample",
            "email": "sample",
            "password": "sample"
        },
        {
            "userId": "sample2",
            "username": "sample2",
            "email": "sample2",
            "password": "sample2"
        },
        {
            "userId": "sample3",
            "username": "sample3",
            "email": "sample3",
            "password": "sample3"
        },
    ])
    const [postList, setPostList] = useState([
        {
            "author": "author",
            "title": "title",
            "body": "body",
        },
        {
            "author": "author2",
            "title": "title2",
            "body": "body2",
        },
        {
            "author": "author3",
            "title": "title3",
            "body": "body3",
        },
        {
            "author": "author4",
            "title": "title4",
            "body": "body4",
        },
    ])
    useEffect(() => {
        const jwtToken = localStorage.getItem(LS_JWT_TOKEN);
        if (jwtToken != null) {
            getCurrentUser();
        }
        loadPosts();
    },[])
    const getCurrentUser = () => {
        const jwtToken = localStorage.getItem(LS_JWT_TOKEN);

        axios.get(API_URL + "/whoami", {headers:{"X-AUTH-TOKEN": `${jwtToken}`}})
            .then(res => {
                setIsAuthenticated(true);
            })
            .catch(res => console.log("catch -> " + res));
    }
    const loadUsers = async () => {
        axios.get("/users")
            .then(({data: {_embedded: {users}}})=> {
                let newUsers = [];
                newUsers = users.map((user) => {
                    for (var key in user) {
                        if (key != "userId" && key != "username" && key != "password" && key != "email") {

                            delete user[key];
                        }
                    }
                    return user;
                })
                 setUserList([...userList, ...newUsers])
            })
    }
    const loadPosts = () => {
        axios.get("/posts")
            .then(({data: {_embedded: {posts}}})=> {
                 setPostList([...postList, ...posts])
            })
            .catch(res => console.log(res))
    }
    const logout = () => {
        localStorage.removeItem(LS_JWT_TOKEN);
        setIsAuthenticated(!isAuthenticated);
    }
    return (
        <div>
            <Header isAuthenticated = {isAuthenticated} logout = {logout}></Header>
            {isAuthenticated ? "authenticated" : "not authenticated"}
            <button onClick = {() => {
                        const jwtToken = localStorage.getItem(LS_JWT_TOKEN);
                        
                        if (jwtToken != null) {
                            axios.get(API_URL + "/user/test", {headers:{"X-AUTH-TOKEN": `${jwtToken}`}})
                                .then(res => console.log(res))
                                .catch(res => console.log(res));
                        }
        }}>/v1/api/user/test</button>
            <button onClick = {() => {
                        const jwtToken = localStorage.getItem(LS_JWT_TOKEN);
                        
                        if (jwtToken != null) {
                            axios.get(API_URL + "/admin/test", {headers:{"X-AUTH-TOKEN": `${jwtToken}`}})
                                .then(res => console.log(res))
                                .catch(res => console.log(res));
                        }
        }}>/v1/api/admin/test</button>

        <div className = "container">
            <div className = "row">

            <div className = "col-9 p-0">
                <PostContainer posts = {postList}></PostContainer>

            </div>
            <div className = "col p-0">
                <TagContainer></TagContainer>

            </div>
            </div>
        </div>
        </div>
    )
}
