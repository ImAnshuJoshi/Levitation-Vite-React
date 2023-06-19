import './App.css'
import Login from './components/Login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './components/Form/Form';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/progress" element={<Form/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
