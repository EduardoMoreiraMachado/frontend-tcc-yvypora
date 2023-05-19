import styles from "./styles.module.css";

import { useNavigate } from 'react-router-dom';

export const Option = ({ imgUrl, text, link }) => {
  const navigation = useNavigate();

  const handleNextPage = () => {
    navigation(link);
  }

  return (
    <div className={styles["option-container"]} onClick={() => {handleNextPage()}}>
      <img className={styles["option-image"]} src={imgUrl} />
      <h1 className={styles["option-text"]}>
        {text}
      </h1>
    </div>
  );
};

export default Option;
