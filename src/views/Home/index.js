import React from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
  const location = useParams();

  return <div>Home</div>;
};

export default Home;
