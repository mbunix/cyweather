import styles from "./Footer.module.scss";

const footer = props => {
  return (
    <footer className={styles["footer"]}>
      <div className="container-fluid">
        Cyweather App 
        <br/>
        View Source on <a href="https://github.com/mbunix/cyweather"> GitHub</a> - Powered by{" "}
        <a href="https://open-meteo.com/">Open-Metio</a>
      </div>
    </footer>
  );
};

export default footer;