import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import {makeStyles} from "@mui/styles";
import {Input, Paper} from "@mui/material";
import './Search.scss';
import {DispatchContext} from '../../store';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: '8px',
    marginLeft: '10px',
    color: 'gray',
  },
  input: {
    height: 36,
    flexGrow: 1,
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.05px'
  }
}));

export default function Search(props) {
  const {className, onChange, style, ...rest} = props;
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);

  return (
    <Paper
      {...rest}
      className="root"
    >
      <SearchIcon className={classes.icon}/>
      <Input
        {...rest}
        className={classes.input}
        disableUnderline
        onChange={(e) => {
          dispatch({type: 'IS_NOT_LOADING', payload: false})
          onChange(e.target.value);
        }}
      />
    </Paper>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object
};
