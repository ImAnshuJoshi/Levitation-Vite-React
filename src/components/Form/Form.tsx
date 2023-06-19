import React, { useState } from "react";
import Step1 from "./Step1/Step1.tsx";
import Step2 from "./Step2/Step2.tsx"
import Step3 from "./Step3/Step3.tsx"
import ProgressBarComp from "../ProgressBar/ProgressBarComp.tsx";
import styles from "./Form.module.css"
import Step4 from "./Step4/Step4.tsx";
const UserForm = () => {
  const [page, setPage] = useState(0);

  const [userInput, setUserInput] = useState({
    username:"",
    email:"",
    phone_number:"",
    address_1:"",
    address_2:"",
    city:"",
    pincode:"",
    country:"",
    single_file:"",
    multi_file:[],
    lat:"",
    long:""
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
  return (
    <div className={styles.userForm}>
      <div className={styles.progressBar}>
        <ProgressBarComp step={page}/>
      </div>

      <div className={styles.userFormContainer}>
        <div className="userForm-container-body">{PageDisplay()}</div>
        <div className="userForm-container-footer">
          <button
            onClick={() => {
              if (page === pages.length - 1) {
                console.log(userInput);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === pages.length - 1
              ? "Submit"
              : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserForm;
