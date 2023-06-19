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

  interface userInput {
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
    state:"",
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
      formData.append("name" , userInput.name);
      formData.append("email" , userInput.email);
      formData.append("phone_number" , userInput.phone_number);
      formData.append("address_1" , userInput.address_1);
      formData.append("address_2" , userInput.address_2);
      formData.append("city" , userInput.city);
      formData.append("pincode" , userInput.pincode);
      formData.append("country" , userInput.country);
      formData.append("state" , userInput.state);
      for(let i=0;i<userInput.multi_file.length;i++){
        formData.append("multi_file" , userInput.multi_file[i]);
      }
      formData.append("geolocation" , userInput.geolocation);
      formData.append("single_file" , userInput.single_file);
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
            onClick={async (e:any) => {
              e.preventDefault();
              if (page === pages.length - 1) {
                handleSubmit(e)
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
