import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import { searchFilter, resetFilter } from '../redux/reducers/homeReducer';
import { LangContext } from '../App';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderBottom: '1px solid #000',
  },
  iconButton: {
    padding: 10,
  },
}));

function Search() {
  const classes = useStyles();
  const lang = React.useContext(LangContext);
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = React.useState('');
  const handlerInputOnChange = (event) => {
    const value = event.target.value;
    if (value === '') {
      dispatch(resetFilter());
    }
    setSearchValue(value);
    dispatch(searchFilter(value));
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
  };
  const handlerOnResetClick = (event) => {
    setSearchValue('');
    dispatch(resetFilter());
  };
  return (
    <form
      noValidate
      autoComplete="off"
      className={classes.root}
      onSubmit={handlerSubmit}
    >
      <InputBase
        className={classes.input}
        placeholder={
          lang === 'ru'
            ? 'Введите страну'
            : lang === 'en'
            ? 'Enter country'
            : 'Wprowadź kraj'
        }
        autoFocus
        value={searchValue}
        onChange={handlerInputOnChange}
      />
      <IconButton
        type="reset"
        className={classes.iconButton}
        onClick={handlerOnResetClick}
      >
        <CloseIcon />
      </IconButton>
      <IconButton type="submit" className={classes.iconButton}>
        <SearchIcon />
      </IconButton>
    </form>
  );
}
export default Search;
