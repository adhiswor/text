import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {useState} from "react";
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,Routes,
  Link
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState("light");
  const[btnText,setBtnText]=useState("Enable dark mode");
  const[alert,setAlert]=useState(null);

  const showAlert=(msg,type)=>setAlert({
    msg:msg,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 7000);
  
  const changeMode=()=>{
    if (mode==="dark") {
      setMode('light');
      document.body.style.backgroundColor="#e6fff2";
      document.body.style.color='black';
      setBtnText("Enable dark mode");
      showAlert("light mode enable","success")
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor="#e6f7ff";
      setBtnText("Enable light mode");
      document.body.style.color='blue';
      showAlert("Dark mode enable","success")

    }
  }
  return (
    <>  <Router>
      <Navbar title3="Practice2" mode={mode} changeMode={changeMode} btnText={btnText}/>
      <Alert alert={alert}/>
    
        <Routes>
          <Route exact path="/" element ={<TextForm heading="enter here text below" mode={mode} showAlert={showAlert}/>} />
          <Route exact path="/about" element ={ <About mode={mode}/>}/>
      
      </Routes>
      </Router>
    </>
  );
}

export default App;
