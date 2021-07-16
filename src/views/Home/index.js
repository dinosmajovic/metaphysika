import React from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
  const location = useParams();

  console.log(location);

  return <div>Home</div>;
};

export default Home;
