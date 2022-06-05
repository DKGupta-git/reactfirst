import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textchanged from './components/Textchange';
function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
const showAlert=(message, type)=>{
setAlert({
   msg : message,
  type: type 
});}
  const togglemode = () =>{ 
    if(mode==='light'){
      setMode("dark");
    //  setModeType('Enabled');
      document.body.style.backgroundColor="grey";
      showAlert('Dark Mode Is Enabled','success');

  }else{
    setMode('light');
    document.body.style.backgroundColor="white";
    //setModeType('Disabled');
    showAlert('Dark Mode Is Disabled','success');
  }
  }
  return (
    <>
    {/* <Navbar navmode={mode} heading="Please Add Text here" togglemode={togglemode}/> */}
<Navbar navmode={mode} heading="Please Add Text here" togglemode={togglemode}/>
<Alert alert={alert}/>
<Textchanged  navmode={mode}/>
</>
  );
}

export default App;
