import { useState, ChangeEvent, useEffect } from "react";
import styles from "../Form.module.css";

const Step4 = (props: any) => {
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const { latitude, longitude } = position.coords;
          setLat(latitude);
          setLong(longitude);
          props.handleChange("lat")(lat);
          props.handleChange("long")(long);
        },
        function (error) {
          console.error(`Error getting user's location: ${error.message}`);
        }
      );
    }
  }, []);
  
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
  if (event.target.files) {
    const uploadedFiles = Array.from(event.target.files);
    const newFiles = [...files, ...uploadedFiles].slice(0, 5);
    setFiles(newFiles);

    const filePromises = newFiles.map((file) => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.result) {
            const binaryString = reader.result.toString();
            resolve(binaryString);
          } else {
            reject(new Error("Failed to read file."));
          }
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsBinaryString(file);
      });
    });

    Promise.all(filePromises)
      .then((binaryStrings) => {
        props.handleChange("multi_file")(binaryStrings);
      })
      .catch((error) => {
        console.error("Error converting files to binary strings:", error);
      });
  }
};
  

  const handleAddMore = () => {
    if (files.length < 5) {
      const inputElement = document.createElement("input");
      inputElement.type = "file";
      inputElement.className = styles.input;
      inputElement.name = "file";
      inputElement.addEventListener("change", handleFileUpload);
      inputElement.click();
    }
  };

  const showFiles = () =>{
    console.log(files);
  }

  return (
    <div className={`${styles.form} ${styles.darkTheme}`}>
      <div className={styles.formGroup}>

      {files.length > 0 && (
        <div className={styles.formGroup}>
          <label className={styles.label}>Uploaded Files:</label>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    {
      files.length < 5 &&
      <button onClick={handleAddMore}>Upload file</button>
    }
    </div>
    <button onClick={showFiles}></button>
    <div className={styles.formGroup}>
      <label className={styles.label}>Latitude</label>
      <input className={styles.input} type="text" value={lat} onChange={props.handleChange("lat")}/>

      <label className={styles.label}>Longitude</label>
      <input className={styles.input} type="text" value={long} onChange={props.handleChange("long")} />
    </div>
    </div>
  );
};

export default Step4;
