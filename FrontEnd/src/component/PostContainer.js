import React from 'react'

export const PostContainer = ({posts}) => {

    console.log(posts)
    const postList = posts.map((post) => {
        console.log(post)
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
        <div className = "col-md-4 py-2  text-truncate">
            <div className = "border p-2">
            <div className = "font-weight-bolder mb-3">
                {title}
            </div>
            <div className = "text-wrap mb-3">
                {body}
            </div>
            <div className = "mb-3 text-secondary">
                {createdDate}
            </div>
            <div className = "border-top text-secondary font-italic">
                by {author}
            </div>

            </div>
        </div>
    )
}
