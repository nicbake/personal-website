import React from "react";
import './intro.css'

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Nic Baker</span> <br/>Software Developer</span>
                <p className="introPara">I am a recent graduate</p>
            </div>
        </section>
    )
}

export default Intro