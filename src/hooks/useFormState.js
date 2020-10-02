import { useState } from 'react';

export default (intialVal) => {
  const [value, setValue] = useState(intialVal);
  const handleChange = (e) => setValue(e.target.value);
  const reset = () => setValue('');
  return [value, handleChange, reset];
};
