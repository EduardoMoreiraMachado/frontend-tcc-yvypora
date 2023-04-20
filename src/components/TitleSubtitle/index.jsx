import styles from "./style.module.css";

export const TitleSubtitle = ({ text, subtitle }) => {
  return (
    <div className={styles["title"]}>
      <h1>{text}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};
export default TitleSubtitle;
