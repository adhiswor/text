import React,{useState} from 'react'

export default function About(props) {
    
    return (
        <>
        <div className='container my-4' >
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{backgroundColor:props.mode==='dark'?'black':'Navy',color:props.mode==='dark'?'white':'white'}}   type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze your text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body"  style={{backgroundColor:props.mode==='dark'?' #ff6666':'#80ffbf',color:props.mode==='dark'?'white':'coffee'}}>
                            <strong>Textutiles give you a way to analyze your text queckly and efficiantly.Be it word count,characters count. </strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed"  style={{backgroundColor:props.mode==='dark'?'black':'Navy',color:props.mode==='dark'?'white':'white'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free To Use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body"   style={{backgroundColor:props.mode==='dark'?' #ff6666':'#80ffbf',color:props.mode==='dark'?'white':'coffee'}}>
                            <strong>Text util is a free counter tools that provide instant character count and word count statistics for a given text.</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed"  type="button" style={{backgroundColor:props.mode==='dark'?'black':'Navy',color:props.mode==='dark'?'white':'white'}}  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body"  style={{backgroundColor:props.mode==='dark'?' #ff6666':'#80ffbf',color:props.mode==='dark'?'white':'coffee'}} >
                        <strong>This word counter software works in any web browsers such as chrome,firefox,IE,safari,opera.</strong>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}
