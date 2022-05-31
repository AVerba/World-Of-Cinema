import { useState } from 'react';
import styles from './SearchBar.module.css';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix';
import { useSearchParams } from 'react-router-dom';

export const SearchBar = ({ onSubmit }) => {
  const [searchParam, setSearchParams] = useSearchParams({});
  const [searchQuery, setSetSearchQuery] = useState(
    searchParam.get('query') ?? ''
  );

  const searchSubmitHandler = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      return Notify.warning(`Please enter a search query`);
    }
    onSubmit(searchQuery);
  };
  const changeNameHandler = event => {
    setSetSearchQuery(event.currentTarget.value.toLowerCase());
  };

  return (
    <div className={styles.SearchBar}>
      <form onSubmit={searchSubmitHandler} className={styles.SearchForm}>
        <button type="submit" className={styles.searchBtn}>
          <span className={styles.searchBtnLabel}>Search</span>
        </button>
        <input
          type="text"
          name="searchQuery"
          autoComplete="off"
          placeholder="Search movies"
          className={styles.searchInput}
          value={searchQuery}
          onChange={changeNameHandler}
        />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
