import styles from "./style.module.css";

export const UserCard = ({ imgUrl, name, email }) => {
  return (
    <div className={styles["user-card-container"]}>
      <div className={styles["user-card-image-container"]}>
        <img className={styles["user-card-image"]} src={imgUrl} alt="" />
      </div>
      <div className={styles["user-card-text"]}>
        <h1 className={styles["user-card-name"]}>{name}</h1>
        <h2 className={styles["user-card-email"]}>{email}</h2>
      </div>
    </div>
  );
};
export default UserCard;
