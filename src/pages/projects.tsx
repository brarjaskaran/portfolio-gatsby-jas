import React from 'react'
import { Link } from 'gatsby';
import Header from 'components/Header';
import  Posts  from 'components/Projects/Posts';

const projects: React.FC = () => {
    return (
        <div>
            <Header/>
            <Posts/>
        </div>
    )
}

export default projects
