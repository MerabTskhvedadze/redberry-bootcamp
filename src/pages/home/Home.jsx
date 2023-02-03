import React from 'react';
import './home.scss';

import { Input } from '../../components';

import logo from '../../assets/images/redberry.png';
import landingImg from '../../assets/images/shutterstock_2189773743.png';

const Home = () => {
  return (
    <>
      <img className='landingImg' src={landingImg} alt='landing img' />
      <main className='main'>
        <header className='main__header'>
          <img className='main__header--logo' src={logo} alt='redberry' />
          <div className='main__header--underline' />
        </header>
        <button className='main__btn'>რეზიუმეს დამატება</button>
      </main>
    </>
  );
};

export default Home;
