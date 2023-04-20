import styles from "./styles.module.css";

export const UserImage = ({ imgUrl }) => {
  return (
    <div className={styles["user-image-container"]}>
      <img className={styles["user-image"]} src={imgUrl} alt="" />
    </div>
  );
};
export default UserImage;
