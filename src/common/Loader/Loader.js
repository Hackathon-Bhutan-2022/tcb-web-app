import {useContext} from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import './loader.scss';
import {StateContext} from '../../store';
import {Images} from '../Assets/Images';

// Can be a string as well. Need to ensure each key-value pair ends with ;

const DarkBackground = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  color: #04555f;
  background-color: rgb(90, 96, 94, 0.9); /* Black w/ opacity */
  ${props =>
    props.disappear &&
    css`
      display: block; /* show */
    `}
`;

export default function Loader() {
  const {loader} = useContext(StateContext);

  return (
    <div className="sweet-loading">
      {loader.isLoad &&
      <DarkBackground disappear={loader} className="preloader-wrapper">
        <img src={Images.logo} alt="loader" className="preloader" width={200}/>
      </DarkBackground>
      }
    </div>
  );
}
