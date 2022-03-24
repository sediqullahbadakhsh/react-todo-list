import React from 'react';
import { Link, useMatch } from 'react-router-dom';

const About = () => {
  const { url } = useMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${url}/about-author`}>About Author</Link>
        </li>
      </ul>
    </div>
  );
};
export default About;
