import React from 'react'
import postlist from '../posts.json'
import Markdown from 'react-markdown';

const PostList = () => {
    const exerplist = postlist.map(post => {
        return post.content.split(" ").slice(0 , 50).join(" ")
    })
    console.log(exerplist)
    return (
        <div className="postlist">
            <h2>All posts</h2>
            {postlist.length && 
                postlist.map((post, i) => {
                    return (
                        <div key={i} className="post">
                            <h3>{post.title}</h3>
                            <p><small>Published on {post.date} by {post.author}</small></p>
                            <hr/>
                            <Markdown source={exerplist[i]} escapeHtml={false}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostList