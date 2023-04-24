// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './Componates/About';
import Navbar1 from './Componates/Navbar';
import TextForm from './Componates/textForm';
import Alert from './Componates/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// let a, b
// a = 2
// b = 5

// let element = <p>Hello, world!</p>;

// let total = a + b;


function App() {

  const [myStyle, changeStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
    height: "100vh",


  })

  const themeEnable = () => {
    if (color === "light") {
      changeColor("dark")
      changeStyle
        (
          {
            color: 'white',
            backgroundColor: 'black',
            height: "100vh",
          }
        )
      document.body.style.backgroundColor = 'black'

      showAlert("Dark mode enabled", "success")
    }
    else {
      changeColor("light")

      changeStyle(
        {
          color: 'black',
          backgroundColor: 'white',
          height: "100vh",
        },
      )
      document.body.style.backgroundColor = 'white'
      showAlert("Dark mode disabled", "success");

    }
  }


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const enableGreen = () => {
    if (color === "light") {
      changeColor('info')
      changeStyle({
        color: "green",
        backgroundColor: 'aqua',
        height: '100vh',
        width: '100%'
      })
      document.body.style.backgroundColor = 'aqua';
    }
    else {
      changeColor('light')
      changeStyle(
        {
          color: "black",
          backgroundColor: 'white',
          height: '100vh',
          width: '100%'
        }
      )
    }
    document.body.style.backgroundColor = 'white';
  }

  const [alert, setAlert] = useState(null);
  const [color, changeColor] = useState("light");
  return (
    <>
      <Router>
        <div style={myStyle}>
          <Navbar1 title="TextReader" About="About-TextReader" String='PageNO:' Number={234} toggleDark={themeEnable} color={color} toggleGreen={enableGreen} />  
          <Alert alert={alert} />
          <div className='my-2 text-end'>
          </div>
          <div className="container">
            <div className="container my-4">

              <Routes>
               <Route path="/react-app" element={<TextForm heading="Here Some Logic" showAlert={showAlert} />}></Route>
                <Route path="/about" element={<About mystyle={{ changeStyle }} />}></Route>
               

              </Routes>
            </div>
          </div>

        </div>
      </Router>

    </>
  );
}

export default App;
