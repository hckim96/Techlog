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
    const [postList, setPostList] = useState([
        // {   
        //     "id": 11,
        //     "author": "sampleAuthor",
        //     "title": "Sample Title",
        //     "body": "sample body, sample body,sample body,sample body, sample body, sample body, sample body,sample body, sample body,sample body,sample body, sample body, sample body, sample body,sample body, sample body,sample body,sample body, sample body, sample body, sample body,",
        //     "createdDate": "2020-09-20 11",
        //     "modifiedDate": "2020-09-20"
        // },
        // {   
        //     "id": 12,
        //     "author": "sampleAuthor",
        //     "title": "Sample Title",
        //     "body": "sample body, sample body,sample body,sample body, sample body, sample body, sample body,sample body, sample body,sample body,sample body, sample body, sample body, sample body,sample body, sample body,sample body,sample body, sample body, sample body, sample body,",
        //     "createdDate": "2020-09-20 12",
        //     "modifiedDate": "2020-09-20"
        // },
        // {   
        //     "id": 13,
        //     "author": "sampleAuthor",
        //     "title": "Sample Title",
        //     "body": "sample body, sample body,sample body,sample body, sample body, sample body, sample body,sample body, sample body,sample body,sample body, sample body, sample body, sample body,sample body, sample body,sample body,sample body, sample body, sample body, sample body,",
        //     "createdDate": "2020-09-20 13",
        //     "modifiedDate": "2020-09-20"
        // },
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
            // .then((res)=> {
            //     console.log(res);
            // }
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
            <Header userId = {userId} isAuthenticated = {isAuthenticated} logout = {logout}></Header>

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
