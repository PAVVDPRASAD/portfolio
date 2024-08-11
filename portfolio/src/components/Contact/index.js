import React from 'react';
import './index.css';

function Contact() {
    return ( <
        section className = "contact" >
        <
        h2 > Contact Me < /h2> <
        p > Feel free to reach out
        for collaborations or just a friendly hello! < /p> <
        a href = "mailto:youremail@example.com" > Send an Email < /a> <
        /section>
    );
}

export default Contact;