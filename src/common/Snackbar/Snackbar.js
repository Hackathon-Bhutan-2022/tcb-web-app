import React, {useContext, useEffect} from 'react';
import {Snackbar} from '@mui/material';
import MuiAlert from '@mui/lab/Alert';
import {DispatchContext, StateContext} from '../../store';
import {SNACKBAR_CLOSE} from '../../reducers';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notify() {
  const {notifyMessage} = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    if (notifyMessage?.isNotify) {
      setTimeout(() => {
        dispatch({type: SNACKBAR_CLOSE, payload: {isNotify: false}});
      }, 50000);
    }
    // eslint-disable-next-line
  }, [notifyMessage]);

  const handleClose = (event, reason) => {
    dispatch({type: SNACKBAR_CLOSE, payload: {isNotify: false}});
    if (reason === 'clickaway') {
      return;
    }
  };

  return (
    <div>
      {notifyMessage?.isNotify &&
      <Snackbar open={notifyMessage?.isNotify} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={notifyMessage?.severity} sx={{width: '100%'}}>
          {notifyMessage?.message}
        </Alert>
      </Snackbar>}
    </div>
  );
}
