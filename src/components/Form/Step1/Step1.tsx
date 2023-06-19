import styles from "../Form.module.css";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setUserName, setEmail, setPhoneNumber } from "../../../state/";

const Step1 = (props: any) => {
  const [countryCode, setCountryCode] = useState("+91");

  const handleCountryCodeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCountryCode(event.target.value);
  };
  interface Country {
    name: string;
    code: string;
    flag: string;
  }
  const countries: Country[] = [
    { name: "In", code: "+91" , flag:"🇮🇳" },
    { name: "USA", code: "+1", flag:"🇺🇸" },
    { name: "UK", code: "+44" , flag:"🇬🇧"},
  ];

  return (
    <div className="form">
      <div className={styles.formGroup}>
        <label className={styles.label}>Username</label>
        <input
          type="text"
          className={styles.input}
          name="name"
          placeholder="Enter your name"
          onChange={(event)=>{props.handleChange("name")(event.target.value)}}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          className={styles.input}
          placeholder="Enter your email"
          onChange={(event)=>{props.handleChange("email")(event.target.value)}}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Phone number</label>
        <div className={styles.phoneInput}>
          <select
            className={`${styles.countryCode} ${styles.input}`}
            value={countryCode}
            onChange={handleCountryCodeChange}
          >
            {countries.map((country: Country, index: number) => (
              <option key={index} value={country.code}>
                {country.flag} {country.name} {country.code} 
              </option>
            ))}
          </select>
          <input
        type="text"
        className={styles.input}
        name="phone_number"
        placeholder="Enter your phone number"
        onChange={(event)=>{props.handleChange("phone_number")(countryCode + event.target.value)}}
      />
        </div>
      </div>
    </div>
  );
};

export default Step1;
