import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';
import { MdClear } from "react-icons/md";


// import CloseIcon from '@mui/icons-material/Close';
const StyledTextField = styled(TextField)`
  width: 220px; // Set the width as required
    background-color: #EDEFF0;
    margin-top: 10px;
    border: none;
    &:hover .MuiOutlinedInput-notchedOutline {
    border: none; // Removes border
  }

  // Remove border on focus
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: none; // Removes border
  }
  .MuiInputBase-input {
    height: 150px; // Sets the height of the input area
    padding: 0 14px; // Maintain some padding inside the input
    border: none;
   

    
  }
`;

function TextAreas() {


  // useEffect(async ()=>{
  //   const url = 'https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&profanityAction=NoAction&textType=plain';
  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'x-rapidapi-key': '814618e8ffmshccf1d781f82d91fp1d7064jsnfde12a667521',
  //     'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
  //     'Content-Type': 'application/json'
  //   },
  //   body: [
  //     {
  //       Text: 'I would really like to drive your car around the block a few times.'
  //     }
  //   ]
  // };
  
  // try {
  //   const response = await fetch(url, options);
  //   const result = await response.text();
  //   console.log(result);
  // } catch (error) {
  //   console.error(error);
  // }
  
  // },[])



  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue('');
  };

  return (
    <StyledTextField
      variant="outlined"
      value={value}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" >
            {value && (
              <IconButton
                onClick={handleClear}
                edge="end"
              >
              <MdClear />

              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
}

export default TextAreas;
