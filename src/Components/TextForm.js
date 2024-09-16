import React, {useState} from 'react'

export default function TextForm(props) {
    const onUpperButtonClick = ()=> {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Uppercased Successfully","success")
    }

    const onLowerButtonClick = ()=> {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Lowercased Successfully","success")
    }

    const onCopyToClipboard = ()=> {
        navigator.clipboard.writeText(text)
        props.showAlert("Copied","success")
    }

    const onClear = ()=> {
        setText('')
        props.showAlert("Textbox Cleared","success")
    }

    const onTextChange = (event)=> {
        setText(event.target.value)
    }

    const [text,setText] = useState("")
  return (
    <>
      <div className="container my-3" style={{color: props.mode === '#FFFFFF' ? '#000000' : '#FFFFFF'}}>
        <h1>{props.label}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{color: props.mode === '#FFFFFF' ? '#000000' : '#FFFFFF', backgroundColor: props.mode === '#FFFFFF' ? '#FFFFFF' : '#244254'}} value={text} id="mytext" rows="8" onChange={onTextChange}></textarea>
        </div>
        <button className='btn btn-primary my-2' disabled={text.length === 0} style={{marginRight: '10px'}} onClick={onUpperButtonClick}>Convert to UpperCase</button>
        <button className='btn btn-primary my-2' disabled={text.length === 0} style={{marginRight: '10px'}} onClick={onLowerButtonClick}>Convert to LowerCase</button>
        <button className='btn btn-primary my-2' disabled={text.length === 0} style={{marginRight: '10px'}} onClick={onCopyToClipboard}>Copt to Clipboard</button>
        <button className='btn btn-primary my-2' disabled={text.length === 0} style={{marginRight: '10px'}} onClick={onClear}>Clear</button>
    </div>
    <div className='container' style={{color: props.mode === '#FFFFFF' ? '#000000' : '#FFFFFF'}}>
        <h2 className='my-2'>Your text summary here</h2>
        <p>{text.split(/\s+/).filter((elem)=>{return elem.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((elem)=>{return elem.length !== 0}).length} Minutes to read </p>
    </div>
    </>
  )
}
