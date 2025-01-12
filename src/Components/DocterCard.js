import React from 'react'
import { Card } from 'react-bootstrap'
import {assets} from '../assets_frontend/assets.js'
import { FaCircle } from "react-icons/fa";
function DocterCard() {
  return (
    <>
    <Card style={{width:"250px",height:"350px",margin:"70px 102px"}}>
        <div className="image-container" style={{background: "rgb(234 239 255)"}}>
        <Card.Img variant="top" src={assets.doc1} style={{width:"267px",height:"250px",marginLeft:"-10px"}}/>
        </div>
        <Card.Body>
        <p style={{color:"green",fontSize:"14px"}}>  <FaCircle />  Available</p>
            <Card.Title style={{marginTop:" -11px",
    fontSize:" 20px",
    fontWeight:"bold"}}>DR Philp james</Card.Title>
            <p>General physician</p>
        </Card.Body>

    </Card>
    
    </>
  )
}

export default DocterCard