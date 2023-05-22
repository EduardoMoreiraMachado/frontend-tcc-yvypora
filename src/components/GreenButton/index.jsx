import styles from './styles.module.css';
import { ReactComponent as Loading } from '../../imgs/spinner.svg';
export const GreenButton = ({ text, onClick, type, isLoading = false }) => {
  return (
    <button
      type={type}
      href='#'
      className={styles['green_button']}
      onClick={onClick}
    >
      {isLoading ? <Loading /> : text}
    </button>
  );
};

export default GreenButton;
