import React from 'react';
import Heroimage from '../../components/Molecules/Heroimage/heroImage';
import BlogForm from '../../components/Molecules/Blog/blogForm';
import Strips from '../../components/Molecules/Strip/strips';
import {Aboutus} from '../../components/Molecules/Aboutus/aboutUs';
const Homepage=(props)=> {
    return (
        <>
            <Heroimage />
            <BlogForm/>
            <Strips/>
            <Aboutus/>
        </>
    );
}

export default Homepage;