import React from 'react'
import { Link } from 'react-router-dom';
import './Post.css';
export const PostContainer = ({posts}) => {

    const postList = posts.map((post) => {
        return <Post 
        key = {post.title}
        title = {post.title}
        author = {post.author}
        body = {post.body}
        createdDate = {post.createdDate}
        >
        </Post>
    })
    return (
        <div className = "row">
            {postList}
        </div>
    )
}



export const Post = ({title, author, body, createdDate}) => {
    return (
        <div className = "col-md-4 py-2">
            <Link to = {`/@${author}/${title}`} className = "border p-2  post  postCard" style = {{textDecoration: "none", color: "black"}}>
                <div className = "font-weight-bolder mb-3" style ={{fontSize: "1.5rem"}}>
                    {title}
                </div>
                <div className = "text-wrap mb-3 mybody">
                    {body}
                </div>
                <div className = "mb-3 text-secondary">
                    {createdDate}
                </div>
                <div className = "border-top text-secondary font-italic">
                    by {author}
                </div>
            </Link>
        </div>
    )
}
