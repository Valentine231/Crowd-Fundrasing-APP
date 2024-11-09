import React from 'react';
import Donationform from './Compontent/Donationform/Donationform';
import Project from './Compontent/Project/Project';
import Footer from './Compontent/Footer/Footer';

const App = () => {
  return (
    <div className='bg-indigo-300 min-w-full min-h-screen flex flex-col'>
      <div className='flex-grow'>
        <Project />
       
      </div>
      <Footer />
    </div>
  );
}

export default App;