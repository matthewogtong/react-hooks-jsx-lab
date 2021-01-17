import React from "react";
import { image } from "../data/data";

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>This is some stuff about me</p>
      <img src={image} alt="I made this"></img>
    </div>
  )
}
export default About;
