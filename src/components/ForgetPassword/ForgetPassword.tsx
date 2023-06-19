import styles from './ForgetPassword.module.css';

function ForgetPassword() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Reset the password!</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="oldpass">Old Password:</label>
          <input className={styles.input} type="password" id="oldpassword"/>
        </div>
        <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="newpass">New Password:</label>
          <input className={styles.input} type="password" id="newpassword"/>
        </div>
        <button className={styles.button} type="submit" >
          Reset
        </button>
          <a className={styles.loginBtn} href="/">Login?</a>
      </form>
    </div>
  );
}

export default ForgetPassword;
