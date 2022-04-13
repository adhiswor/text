import React,{useState} from 'react'

export default function TextForm(props) {
  const[text,setText]=useState("");

    const handleUpperclick=()=>{
       var textnew=text.toUpperCase();
       setText(textnew);
       {props.showAlert("UpperCase was clicked",'primary')}
    };
    const handleLowerclick=()=>{
      var textnew=text.toLowerCase();
      setText(textnew);
      {props.showAlert("lowerCase was clicked","secondary")}

   };

   const handleClear=()=>{
    setText("");
    {props.showAlert("text Cleared","danger")}

   };

   const handleTrim=()=>{
    var textnew = text.trim();
    setText(textnew);
    {props.showAlert("first & last speces removed","success")}

   };
   const handleReplace=()=>{
    var textnew2 = text.replace(/\s+/g, " ");
    setText(textnew2);
    {props.showAlert("all speces removed","info")}

   };

   const handleCopy=()=>{
    var txt=document.getElementById('exampleFormControlTextarea1');
    txt.select();
    navigator.clipboard.writeText(txt.value);
    {props.showAlert("copy to clipboard","warning")}
}

//  const handleTime=()=>{
//       setInterval(()=>{
//       },1000);
//     };
    
    const handleOnChange=(event)=>{
        console.log("on change")
        setText(event.target.value)
    }
    
    
    var new_txt = text.split(" ");
       let value = "";
       let new_txt2 = new_txt.filter(function (item) {
           return item !== value
       })
       var len = new_txt2.length;

  return (
    <>
<div className="container text-center  my-4 mt-4">
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label ">{props.heading}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text}  onChange={handleOnChange}
   style={{ backgroundColor:props.mode==='light'?'white':'grey',
    color: props.mode==='light'?'black':'white'}}/>
</div>
<div className=' '>
<button className="btn btn-primary mx-2 my-2 w-25 h-100" disabled={text.length===0} onClick={handleUpperclick}>Convert to uppercase</button>
<button className="btn btn-secondary mx-2  my-2 w-25 h-100" disabled={text.length===0} onClick={handleLowerclick}>Convert to lowercase</button>
<button className="btn btn-danger mx-2  my-2 w-25 h-100" disabled={text.length===0} onClick={handleClear}>Clear</button>
<button className="btn btn-success mx-2  my-2 w-25 h-100" disabled={text.length===0} onClick={handleTrim}>Remove first and last space</button>
<button className="btn btn-info mx-2  my-2 w-25 h-100" disabled={text.length===0} onClick={handleReplace}>Remove Space</button>
<button className="btn btn-warning mx-2  my-2 w-25 h-100" disabled={text.length===0} onClick={handleCopy}>Copy</button>
</div>
</div>
<div className='container'>
  <h1>{text.length} characters</h1>
  <h1>{len} words</h1>
  <h2>text summary</h2>
  {text.length>0?text:<h6>Enter something here !!!</h6>}
</div>
</>
  )
}
