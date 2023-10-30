import React, { useState,useEffect } from 'react';
import CenteredButton from '../components/CenteredButton';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const [ fromWhere, setFromWhere ] = useState(false);
  let appCompState;
  if (location.state) {
      appCompState = location.state;
  }
  useEffect(()=>{
    setFromWhere(appCompState)
  },[appCompState])
  return (
    <div className="App">
      <CenteredButton fromWhere={fromWhere} />
    </div>
  );
}

export default Home;