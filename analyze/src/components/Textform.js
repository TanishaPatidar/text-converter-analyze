import React,{useState} from 'react'



export default function Textform(props) {

    const handleupClick=()=>{
      let newtext= text.toUpperCase();
      setText(newtext);
    }

    const handleloClick=()=>{
        let newtext= text.toLowerCase();
        setText(newtext);
      }
    
    const handleonChange = (event)=>{
      setText(event.target.value);
      console.log(event.target.value);
    }
     
    const handlecopyClick= ()=>{
      let text =document.getElementById("mybox");
      text.select(); // use for selecting it show
      navigator.clipboard.writeText(text.value);
    }

    const handlespaceClick=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))

    }

const [text,setText]=useState("");
  return (
    <div>
    <h3>{props.heading}</h3>
    <div className="mb-3">
  <label for="mybox" className="form-label"></label>
  <textarea className="form-control" value= {text} onChange={handleonChange} id="mybox" rows="8"></textarea>
   </div>
    
   <button type="button" class="btn btn-primary mx-2" onClick={handleupClick}>Convert to uppercase</button>
   <button type="button" class="btn btn-primary mx-2 my-2" onClick={handleloClick}>Convert to lowercase</button>
   <button type="button" class="btn btn-primary  mx-2 my-2" onClick={handlecopyClick}>Copy</button>
   <button type="button" class="btn btn-primary  my-2" onClick={handlespaceClick}>Remove spaces</button>

    <p> {text.length} character and {text.split(" ").length} word</p>

</div>
)
}
