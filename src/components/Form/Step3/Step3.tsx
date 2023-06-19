import styles from "../Form.module.css";

const Step3 = (props: any) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const uploadedFile = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(uploadedFile);
      reader.onload = () => {
        const base64String = reader.result;
        props.handleChange("single_file")(base64String);
      }
      reader.onerror = (error) => {
        console.log('Error: ', error);
      }


    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Upload File</label>
        <input
          type="file"
          className={styles.input}
          name="file"
          onChange={handleFileUpload}
        />
      </div>
    </div>
  );
};

export default Step3;
