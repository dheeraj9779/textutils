import './App.css';
import { useState } from 'react';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('#FFFFFF')
  const [alert, setAlert] = useState(null)


  const toggleMode = (cls)=>{
      if(cls === '#FFFFFF'){
        setMode('#FFFFFF')
        document.body.style.backgroundColor = '#FFFFFF'
      }
      else{
        setMode(cls)
        document.body.style.backgroundColor = cls
      }
  }
  
  const showAlert = (message,type)=>{
      setAlert({
        message: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      },1500)
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className='container'>
        <Routes>
          <Route exact path='/' element={<TextForm label="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>} />
          <Route exact path='/about' element={<About />} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
