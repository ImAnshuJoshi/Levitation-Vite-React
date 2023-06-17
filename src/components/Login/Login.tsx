import { useState } from 'react';
import styles from './Login.module.css';
import { alert } from '../../utils/alert';
import Loader from "react-js-loader";
import { useSelector, useDispatch } from "react-redux";
import {setUser , setToken} from "../../state/auth/auth-slice"

function Login() {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [loading , setLoading] = useState(false);
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const handleSubmit = async (e : any) =>{
        e.preventDefault();
        try{
            setLoading(true)
            const res = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login" , {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    email,
                    password
                })
            })
            const {authToken}= await res.json();
            console.log(authToken);
            if(authToken){
              alert("success" , "You have successfully logged in" , "success");
              dispatch(setUser(email));
              dispatch(setToken(authToken));
            }
            else{
              alert("error" , "Invalid credentials" , "error");
            }
        }
        catch(err:any){
            alert("error" , err.message , "error");
        }
        finally{
            setLoading(false);
        }
    }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email:</label>
          <input className={styles.input} type="email" id="email"  onChange={(e)=>{
            setEmail(e.target.value)
          }}/>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="password">Password:</label>
          <input className={styles.input} type="password" id="password"  onChange={(e)=>{
            setPassword(e.target.value)
          }}/>
        </div>
          {loading ? 
          <Loader
          type="bubble-loop"
          bgColor={"#FFFFFF"}
          color={"#FFFFFF"}
          size={30}
        />
          :
        <button className={styles.button} type="submit" >
          Login
        </button>
          }
          <span className={styles.forgotPasswordBtn}>Forgot password ?</span>
      </form>
    </div>
  );
}

export default Login;
