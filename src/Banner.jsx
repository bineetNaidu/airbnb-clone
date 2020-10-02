import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Search from './Search';

// Statics
import './Banner.css';

const Banner = () => {
  // States
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? 'Hide' : 'Search Dates'}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Go Near</h1>
        <h5>
          Settle in somewhere new. Discover nearby stays to live, work, or just
          relax.
        </h5>

        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
