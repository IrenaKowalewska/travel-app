import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setCurrentLanguage } from '../redux/reducers/homeReducer';
import { LangContext } from '../App';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Language() {
  const classes = useStyles();
  const lang = React.useContext(LangContext);

  const dispatch = useDispatch();

  const handlerOnChange = (event) => {
    const value = event.target.value;
    dispatch(setCurrentLanguage(value));
  };

  return (
    <FormControl className={classes.formControl}>
      <Select value={lang} onChange={handlerOnChange} displayEmpty>
        <MenuItem value="ru">русский</MenuItem>
        <MenuItem value="en">english</MenuItem>
        <MenuItem value="pl">polski</MenuItem>
      </Select>
    </FormControl>
  );
}
export default Language;
