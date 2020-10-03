import React, { useState } from 'react';
import PeopleIcon from '@material-ui/icons/People';
import { DateRangePicker } from 'react-date-range';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

// Statics
import 'react-date-range/dist/theme/default.css'; // theme css file
import 'react-date-range/dist/styles.css'; // main style file
import './Search.css';

const Search = () => {
  // States
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // Functions
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };
  const history = useHistory();

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={() => history.push('/search')}>Search Airbnb</Button>
    </div>
  );
};

export default Search;
