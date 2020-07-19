import React from 'react'
import postlist from '../posts.json'
import Markdown from 'react-markdown';
import {Link} from 'react-router-dom'

const PostList = () => {
    const exerplist = postlist.map(post => {
        return post.content.split(" ").slice(0 , 20).join(" ")
    })
    console.log(exerplist)
    return (
        <div className="postlist">
            <h2 className="postlist__title">All posts</h2>
            <div className="posts">
            {postlist.length && 
                postlist.map((post, i) => {
                    return (
                        <div key={i} className="post">
                            <h3>{post.title}</h3>
                            <p><small>Published on {post.date} by {post.author}</small></p>
                            <hr/>
                            <Markdown source={exerplist[i]} escapeHtml={false}/>
                            <Link to={`/post/${post.id}`}><button>Read more</button></Link>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default PostList