import css from './Filter.module.css';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={css.container}>
      <label>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
};
