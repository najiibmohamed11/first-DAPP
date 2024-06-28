import React from 'react'
import styled from 'styled-components'


const TranslateBotton = styled.button`
border: none;
margin-top: 20px;
padding: 15px;
width: 100%;
color : white;
background-color: #6791ED;


`
function TranslateBtn() {
  return (
    <TranslateBotton>Translate</TranslateBotton>
  )
}

export default TranslateBtn