import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import useFormState from './hooks/useFormState';

// Statics
import './Header.css';

const Header = () => {
  // Hooks && Contexts
  const [value, handleValue, resetVal] = useFormState('');

  // Functions

  return (
    <div className="header">
      <img
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        className="header__icon"
        alt="Airbnb Logo"
      />

      <div className="header__center">
        <input type="text" value={value} onChange={handleValue} />
        <SearchIcon />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
