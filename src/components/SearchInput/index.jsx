import styles from "./style.module.css";

export const SearchInput = ({ value, onChange, onFocus, onBlur }) => {
  return (
    <input
      className={styles["text-input"]}
      type="search"
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};
