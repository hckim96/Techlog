import React from 'react'
import { Link } from 'react-router-dom';
import './Post.css';
export const PostContainer = ({posts}) => {

    const postList = posts.map((post) => {
        return <Post 
        key = {post.createdDate}
        title = {post.title}
        author = {post.author}
        body = {post.body}
        createdDate = {post.createdDate}
        link = {post._links.post.href}
        >
        </Post>
    })
    return (
        <div className = "row">
            {postList}
        </div>
    )
}



export const Post = ({title, author, body, createdDate, link}) => {
    const postId = link.substr(link.lastIndexOf("/")+1);
    return (
        <div className = "col-md-4 py-2">
            <Link to = {`/@${author}/${postId}`} className = "d-flex flex-column border p-2  post  postCard" style = {{textDecoration: "none", color: "black"}}>
                <div className = "font-weight-bolder mb-3" style ={{fontSize: "1.5rem"}}>
                    {title}
                </div>
                <div className = "text-wrap mb-3 mybody" dangerouslySetInnerHTML={{__html: body}}>
                </div>
                <div className = "mt-auto text-secondary">
                    {createdDate}
                </div>
                <div className = "border-top text-secondary font-italic mt-2">
                    by
                    <Link to = {`/@${author}`} style = {{color: "black", marginLeft: ".25rem"}}>
                        {author}
                    </Link>
                </div>
            </Link>
        </div>
    )
}
