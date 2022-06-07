import React from 'react';
import Header from './Landing/Header/Header';
import {Outlet} from 'react-router-dom';
import Footer from './Landing/Footer/Footer';

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
