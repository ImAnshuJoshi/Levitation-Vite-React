import './App.css'
import Login from './components/Login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './components/Form/Form';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/forgetpassword" element={<ForgetPassword/>}/>
      <Route path="/progress" element={<Form/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
