import React from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
  const location = useParams();

  // console.log(location);

  return <div>About</div>;
};

export default About;
