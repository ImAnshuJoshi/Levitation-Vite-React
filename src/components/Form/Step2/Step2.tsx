import styles from "../Form.module.css"


const Step2 = (props : any) => {
  return (
    <div className="form">
      <div className={styles.formGroup}>
      <label className={styles.label}>Address Line 1</label>
      <input
        type="text"
        className={styles.input}
        name="addressline1"
        placeholder="Address Line 1"
        onChange={(event)=>{props.handleChange("address_1")(event.target.value)}}
        />
        </div>
        <div className={styles.formGroup}>
      <label className={styles.label}>Address Line 2</label>
      <input
        type="text"
        className={styles.input}
        name="addressline1"
        placeholder="Address Line 2"
        onChange={(event)=>{props.handleChange("address_2")(event.target.value)}}
        />
        </div>
        <div className={styles.formGroup}>
      <label className={styles.label}>City</label>
      <input
        type="text"
        className={styles.input}
        name="city"
        placeholder="city"
        onChange={(event)=>{props.handleChange("city")(event.target.value)}}
        />
        </div>
        <div className={styles.formGroup}>
      <label className={styles.label}>Pin-code</label>
      <input
        type="text"
        className={styles.input}
        name="pincode"
        placeholder="pincode"
        onChange={(event)=>{props.handleChange("pincode")(event.target.value)}}
        />
        </div>
        <div className={styles.formGroup}>
      <label className={styles.label}>State</label>
      <input
        type="text"
        className={styles.input}
        name="state"
        placeholder="state"
        onChange={(event)=>{props.handleChange("state")(event.target.value)}}
        />
        </div>
        <div className={styles.formGroup}>
    <label className={styles.label}>Country</label>
      <input
        type="text"
        name="country"
        className={styles.input}
        placeholder="Country"
        onChange={(event)=>{props.handleChange("country")(event.target.value)}}
        />
        </div>
    </div>
  );
};
export default Step2;
