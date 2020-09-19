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
        >
        </Post>
    })
    return (
        <div className = "row">
            {postList}
        </div>
    )
}



export const Post = ({title, author, body}) => {
    return (
        <div className = "border col-5">
            title: {title}, author: {author}, body: {body}
        </div>
    )
}
