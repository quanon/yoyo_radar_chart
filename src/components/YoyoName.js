import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const YoyoName = ({ name, setName }) => (
  <TextField
    label="Yo-Yo"
    variant="standard"
    slotProps={{ htmlInput: { style: { textAlign: 'center' } } }}
    defaultValue={name}
    onChange={(e) => {
      const { value } = e.currentTarget;
      setName(value);
    }}
    fullWidth
  />
);

YoyoName.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func.isRequired
};

export default YoyoName;
