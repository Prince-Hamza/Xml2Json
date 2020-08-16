import React, { Component } from "react";
import {options} from './Options'
import * as parser from 'fast-xml-parser'

export default class Main extends Component {
  componentDidMount = () => {

  const Xml = `<note>
                  <to>Ronny</to>
                  <from>Humza</from>
                  <heading>Reminder</heading>
                  <body>Don't forget me this weekend!</body>
               </note>`

  if (parser.validate(Xml) === true) { 
    var jsonObj = parser.parse(Xml ,options);
   }


   document.getElementById("Result").value = JSON.stringify(jsonObj);

   

  }
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  render() {
    return (
      <div>
        <input id = "Result" type = "text"  style = {verstyle} />
      </div>
    );
  }
}


let verstyle = {
  position:'absolute' ,
  top:'10%' ,
  left:'0%' ,
  width:"100%" , "height":"60%" ,
  backgroundColor: "#222" , 
  color:"cyan" , 
  font : "bold italic 16px times new roman"
}