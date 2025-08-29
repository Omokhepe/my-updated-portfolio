import React from 'react';
import {Chatbot, HeroSection, Nav} from "./index.js";

const TryThis = () => {
    return (
        <div className="TryThis" style={{backgroundColor: "white"}}>
            <Nav/>
            <HeroSection/>
            {/*<Chatbot/>*/}
        </div>
    );
};

export default TryThis;