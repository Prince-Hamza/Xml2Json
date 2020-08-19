import React, { Component } from "react";
import {options} from './Options.js'
import * as parser from 'fast-xml-parser'
import Upload from './Upload'

export default class Main extends Component {
  componentDidMount = () => {


  const Xml = `<note><to>Ronny</to>from>Humza</from></note>`

 
  }
  constructor(props) {
    super(props);
    this.state = {
      Xml:``      
    };
  }
  
  render() {
    return (
      <div>

        <Upload />
{/*         
        <input id = "InputXml" style = {InputXml} onChange = {(e)=>{          
              var Xml = e.target.value        
              if (parser.validate(Xml) === true) { 
              var jsonObj = parser.parse(Xml ,options);
              }
              document.getElementById("Result").value = JSON.stringify(jsonObj);
          }} /> */}

        <textarea id = "Result" type = "text"  style = {verstyle} />
      </div>
    );
  }
}


let verstyle = {
  position:'absolute' ,
  top:'30%' ,
  left:'0%' ,
  width:"100%" , height:"60%" ,
  backgroundColor: "#222" , 
  color:"cyan" , 
  font : "bold italic 16px times new roman"
}

let InputXml = {
  position:'absolute' ,
  top:'50%' ,
  left:'0%' ,
  width:"100%" , height:"60%" ,
  backgroundColor: "#222" , 
  color:"cyan" , 
  font : "bold italic 16px times new roman"
} 
