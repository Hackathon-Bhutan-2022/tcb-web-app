import React from 'react';
import {Button} from '@mui/material';
import './style.scss';

export default function ButtonContained({text, onClick, type}) {
  return (
    <React.Fragment>
      <Button className='buttonContained text-capitalize' type={type} onClick={onClick}>{text}</Button>
    </React.Fragment>
  );
}
