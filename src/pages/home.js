import React from 'react'
import Layout from '../components/layout'
import PostList from '../components/postlist'

const Home = () => {
    return (
        <div>
            <Layout>
                <PostList />
            </Layout>
        </div>
    )
}

export default Home