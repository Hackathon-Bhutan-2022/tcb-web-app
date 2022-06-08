import React from 'react';
import Header from './Landing/Header/Header';
import {Outlet} from 'react-router-dom';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
}
