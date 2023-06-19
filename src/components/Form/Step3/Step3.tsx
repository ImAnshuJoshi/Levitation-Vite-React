import styles from "../Form.module.css";

const Step3 = (props: any) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const uploadedFile = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const binaryData = reader.result;
        props.handleChange("single_file")(binaryData);
      };

      reader.readAsBinaryString(uploadedFile);
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
