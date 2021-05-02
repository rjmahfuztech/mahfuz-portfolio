import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';
import Blog from '../Blog/Blog';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <div className="container">
                <Header></Header>
                <AboutMe></AboutMe>
                <Projects></Projects>
                <Blog></Blog>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;