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
    ])
    const [postList, setPostList] = useState([
        {
            "author": "sampleAuthor",
            "title": "Sample Title",
            "body": "sample body, sample body,sample body,sample body, sample body, sample body, sample body,sample body, sample body,sample body,sample body, sample body, sample body, sample body,sample body, sample body,sample body,sample body, sample body, sample body, sample body,",
            "createdDate": "2020-09-20",
            "modifiedDate": "2020-09-20"
        },
        {
            "author": "sampleAuthor",
            "title": "Sample Title",
            "body": "sample body, sample body,sample body,sample body, sample body, sample body, sample body,",
            "createdDate": "2020-09-20",
            "modifiedDate": "2020-09-20"

        },
        {
            "author": "sampleAuthor",
            "title": "Sample Title",
            "body": "sample body, sample body,sample body,sample body, sample body, sample body, sample body,",
            "createdDate": "2020-09-20",
            "modifiedDate": "2020-09-20"

        },
        {
            "author": "sampleAuthor",
            "title": "Sample Title",
            "body": "sample body, sample body,sample body,sample body, sample body, sample body, sample body,",
            "createdDate": "2020-09-20",
            "modifiedDate": "2020-09-20"

        },
        {
            "author": "sampleAuthor",
            "title": "Sample Title",
            "body": "sample body, sample body,sample body,sample body, sample body, sample body, sample body,",
            "createdDate": "2020-09-20",
            "modifiedDate": "2020-09-20"

        },
        {
            "author": "sampleAuthor",
            "title": "Sample Title",
            "body": "sample body, sample body,sample body,sample body, sample body, sample body, sample body,",
            "createdDate": "2020-09-20",
            "modifiedDate": "2020-09-20"

        },
        {
            "author": "sampleAuthor",
            "title": "Sample Title",
            "body": "sample body, sample body,sample body,sample body, sample body, sample body, sample body,",
            "createdDate": "2020-09-20",
            "modifiedDate": "2020-09-20"

        },
        {
            "author": "sampleAuthor",
            "title": "Sample Title",
            "body": "sample body, sample body,sample body,sample body, sample body, sample body, sample body,",
            "createdDate": "2020-09-20",
            "modifiedDate": "2020-09-20"

        },
        {
            "author": "sampleAuthor",
            "title": "Sample Title",
            "body": "sample body, sample body,sample body,sample body, sample body, sample body, sample body,",
            "createdDate": "2020-09-20",
            "modifiedDate": "2020-09-20"

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
                setUserId(res.data);
                setIsAuthenticated(true);
            })
            .catch(res => console.log("catch -> " + res));
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
        <div className ="">
            <Header userId = {userId} isAuthenticated = {isAuthenticated} logout = {logout}></Header>
            {/* {isAuthenticated ? "authenticated" : "not authenticated"}
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
        }}>/v1/api/admin/test</button> */}

            <div className = "row pt-5 mx-5">
                <div className = " col-9">

                    <PostContainer posts = {postList}></PostContainer>
                </div>
                <div className = "col ml-5 text-start">
                    <TagContainer></TagContainer>
                </div>
            </div>
        </div>
    )
}
