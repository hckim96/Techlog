import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Header } from '../component/Header';
import './PostPage.css';
import { Link } from 'react-router-dom';

const API_URL = "/v1/api"
const LS_JWT_TOKEN = "JWT_TOKEN";
export const PostPage = ({match}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId,setUserId] = useState("");
    const [post, setPost] = useState({});
    useEffect(() => {
        const jwtToken = localStorage.getItem(LS_JWT_TOKEN);
        if (jwtToken != null) {
            getCurrentUser();
        }
        loadPost();
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
    const logout = () => {
        localStorage.removeItem(LS_JWT_TOKEN);
        setIsAuthenticated(!isAuthenticated);
    }
    useEffect(() => {
        loadPost();
    },[]);
    const loadPost = () => {
        axios.get(`/posts/${match.params.postId}`)
            .then(res => {setPost(res.data);
            });
    }

    return (
        <div>
            <Header userId = {userId} isAuthenticated = {isAuthenticated} logout = {logout}></Header>

            <div className = "postPageContainer">
                <div className = "d-flex flex-column">
                    <div className = "title">
                    {post.title} 
                    </div>
                    <div className = "info d-flex flex-row">
                        <span> <Link className = "author" to = {`/@${post.author}`}>{post.author} </Link></span> <span className = "separator">·</span> <span className = "createdDate"> {post.createdDate}</span>
                    </div>
                    <div className = "tags">tags</div>
                </div>
                <div className = "body">
                {post.body}

                </div>
            </div>
        </div>
    )
}
