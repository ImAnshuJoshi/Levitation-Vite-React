import './App.css'
import Login from './components/Login/Login'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Form from './components/Form/Form';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import { useSelector } from "react-redux";

function App() {
  const userToken = useSelector((state:any) => state.userToken);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        {userToken ? (
          <Route path="/progress" element={<Form />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
         <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
const NotFound = () => {
  return <h3>Page not found</h3>;
};
export default App;
