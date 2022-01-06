import React from 'react'
import './fotter.css';
// import {Link} from 'react-router-dom';
import Photo from '../photos/GitHub-Mark-32px.png'




//main function
function fotter() {
    return (
        <footer className="footer">
            <hr/>
            ©sabrina babakulova <br/>
            stalk the creator here! :
            <a href="https://github.com/sabrina34352" target={"_blank"} rel='noreferrer'> <img src = {Photo} alt='logo'/></a>
        </footer>
    )
}

export default fotter
