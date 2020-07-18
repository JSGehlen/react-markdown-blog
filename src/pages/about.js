import React from 'react'
import Markdown from 'react-markdown';
import aboutText from '../pages.json'
import Layout from '../components/layout'

const About = () => {
    return (
        <Layout>
            <div className="about">
                <h1>This is a about page</h1>
                <Markdown source={aboutText[0].content} escapeHtml={false}/>
            </div>
        </Layout>
    )
}

export default About