import { Link } from 'gatsby';
import React from 'react';

interface WelcomeProps {
  siteAuthor: string;
}

const Welcome: React.FC<WelcomeProps> = ({ siteAuthor = `` }) => (
  <div>
    <h1>
      <Link to="/">{siteAuthor}</Link>
    </h1>
  </div>
);

export default Welcome;
