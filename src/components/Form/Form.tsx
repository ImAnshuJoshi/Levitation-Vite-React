import React, { useState } from "react";
import Step1 from "./Step1/Step1.tsx";
import Step2 from "./Step2/Step2.tsx"
import Step3 from "./Step3/Step3.tsx"
import ProgressBarComp from "../ProgressBar/ProgressBarComp.tsx";
import styles from "./Form.module.css"
import Step4 from "./Step4/Step4.tsx";
import Loader from "react-js-loader";
import { alert } from "../../utils/alert.ts";
import { useSelector } from "react-redux";
const UserForm = () => {
  const [page, setPage] = useState(0);
  const [loading , setLoading ] = useState(false);
  const userToken = useSelector((state:any) => state.userToken);
  console.log(userToken)

  interface UserInput {
    [key: string]: string | string[] | File[] | undefined;
  }
  
  const [userInput, setUserInput] = useState({
    name:"",
    email:"",
    phone_number:"",
    address_1:"",
    address_2:"",
    city:"",
    pincode:"",
    country:"",
    single_file:"",
    multi_file:[],
    geolocation:""
  });
  const nextStep = () => {
    setPage((currPage) => currPage + 1);
  };
  const pages = [
    "Basic-Details",
    "Address",
    "File-Upload",
    "Multi File Upload"
  ];

  const PageDisplay = () => {
    if (page === 0)
      return <Step1 nextStep={nextStep} handleChange={handleChange} />;
    else if (page === 1)
      return <Step2 nextStep={nextStep} handleChange={handleChange} />;
    else if (page === 2)
      return <Step3 nextStep={nextStep} handleChange={handleChange} />;
    else if (page === 3)
      return <Step4 nextStep={nextStep} handleChange={handleChange} />;
  };
  
  const handleChange = (input: any) => (value:string) => {
    setUserInput({ ...userInput, [input]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      for (let key in userInput) {
        if (Array.isArray(userInput[key])) {
          for (let i = 0; i < userInput[key].length; i++) {
            formData.append(`${key}[]`, userInput[key][i]);
          }
        } else {
          formData.append(key, userInput[key]);
        }
      }
      const res = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/form", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
        body: formData,
      });
      const data = await res.json();
      console.log(data);
    } catch (err: any) {
      alert("error", err.message, "error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.userForm}>
      <div className={styles.progressBar}>
        <ProgressBarComp step={page}/>
      </div>

      <div className={styles.userFormContainer}>
        <div className="userForm-container-body">{PageDisplay()}</div>
        <div className="userForm-container-footer">
          {loading ? 
          <Loader
          type="bubble-loop"
          bgColor={"#FFFFFF"}
          color={"#FFFFFF"}
          size={30}
        />
          :
          <button
            onClick={async (e) => {
              e.preventDefault();
              if (page === pages.length - 1) {
                await handleSubmit(e)
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === pages.length - 1
              ? "Submit"
              : "Next"}
          </button>
}
        </div>
      </div>
    </div>
  );
};
export default UserForm;
