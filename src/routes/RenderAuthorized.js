import React, {useContext} from 'react';
import {StateContext} from '../store';

const RenderAuthorized = ({Component, authorized = [], ...props}) => {
  const {user} = useContext(StateContext);
  const isAuthorized = authorized.some((value => user?.role?.name === value));
  return (isAuthorized ? <>{props.children}</> : <></>);
};
export default RenderAuthorized;
