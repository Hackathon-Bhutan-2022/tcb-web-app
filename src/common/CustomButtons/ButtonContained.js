import React from 'react';
import {Button} from '@mui/material';
import './style.scss';

export default function ButtonContained({text, onClick}) {
  return (
    <React.Fragment>
      <Button className='buttonContained text-capitalize' onClick={onClick}>{text}</Button>
    </React.Fragment>
  );
}
