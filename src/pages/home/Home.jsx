import React from 'react';
import './home.scss';

import { Button, Header, LoadingSpinner } from '../../components';

import logo from '../../assets/images/redberry.png';
import landingImg from '../../assets/images/shutterstock_2189773743.png';

const Home = () => {
  // return (
  //   <>
  //     <img className='landingImg' src={landingImg} alt='landing img' />
  //     <main className='main'>
  //       <Header>
  //         <img className='main__logo' src={logo} alt='redberry' />
  //       </Header>
  //       <Button className='main__btn'>ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</Button>
  //     </main>
  //   </>
  // );
  return <LoadingSpinner />;
};

export default Home;
