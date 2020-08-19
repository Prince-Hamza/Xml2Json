import React, { Component } from "react";
import $ from 'jquery'
export default class Main extends Component {
  componentDidMount = () => {


    var fileInput = $('#files');
var uploadButton = $('#upload');

uploadButton.on('click', function() {
    if (!window.FileReader) {
        alert('Your browser is not supported')
    }
    var input = fileInput.get(0);
    
    // Create a reader object
    var reader = new FileReader();
    if (input.files.length) {
        var textFile = input.files[0];
        reader.readAsText(textFile);
        $(reader).on('load', processFile);
    } else {
        alert('Please upload a file before continuing')
    } 
});

function processFile(e) {
    var file = e.target.result,
        results;
    if (file && file.length) {
        results = file.split("\n");
        console.log(results)

        results.forEach( line => {
           var pre = $('#Result').val()
           $('#Result').val(pre + line)
          //alert(line)
        })
        //  alert(results[1])
        
         
        //  $('#Result').val(results[1]);
        //  $('#Result').val(results[2]);
        
    }
}

  }
  constructor(props) {
    super(props);
    this.state = {
    
    };

  }
  
  render() {
    return (
      <div>
          <input type= 'file' id='files' />
             <button id='upload'>Upload</button>
             <br/><br/>
         </div>
    );
  }
}

