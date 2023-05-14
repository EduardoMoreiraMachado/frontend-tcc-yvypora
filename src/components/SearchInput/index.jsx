import styles from './styles.module.css';

export const SearchInput = ({
  value,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
}) => {
  return (
    <input
      onKeyDown={onKeyDown}
      className={styles['text-input']}
      type='search'
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};
