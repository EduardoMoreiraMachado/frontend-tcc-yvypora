import styles from './styles.module.css';

export const SearchInput = ({
  value,
  onChange,
  onFocus,
  onBlur,
  ref,
  onKeyDown,
}) => {
  return (
    <input
      ref={ref}
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
