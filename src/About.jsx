import React from "react"
import web from "../src/Image/s2.jpg"
import { NavLink } from "react-router-dom"
import Common from "./Common"

const About = () => {
    return(
        <>
        <Common name='Welcome to about page of'
         imgsrc={web}
            visit="/contact"
            btname="Contact Now"
         />
      </>
    )
}
export default About