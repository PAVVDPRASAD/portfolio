import React from 'react';
import './index.css';

function Projects() {
    return ( 
        <section className = "projects" >
        <h2 > My Project </h2> 
        <div className = "project-grid" >
        <div className = "project-card" >
            <img src = "https://thumbs.dreamstime.com/z/gamer-emoji-emoticon-cartoon-smiley-face-character-holding-video-games-controller-playing-games-62381591.jpg"
            alt = "emojiGame"
            className = 'emojiGame' />
            <h3 > Emoji Game </h3> 
            <p > The Emoji Game is a fun and interactive web - based game designed to test players ' memory and matching skills using emojis. The game challenges players to match pairs of emojis within a time limit, providing an engaging experience with a focus on both entertainment and cognitive exercise.</p> 
            <a href = "https://arun1265.ccbp.tech/"
            target = "_blank"
            rel = "noopener noreferrer" > View Project </a> 
        </div>
        </div> 
        </section>
    );
}

export default Projects;