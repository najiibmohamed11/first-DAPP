import React from 'react'
import { MdSwapHoriz } from "react-icons/md";
import styled from 'styled-components';



const TopSlider=styled.div`
    display: flex
`

const TopSliderLanguageContainer=styled.div`
width:200px;
height: 30px;
border-radius: 5px;
background-color:#EFEFEF;
align-items: center;
display: flex;
padding-left:20px ;
color: #7252C1;
border: 1px solid grey;

`
const SliderIcon=styled(MdSwapHoriz)`
    font-size :24px;
    text-align:center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:3px 10px;

`

function SomaliToEnglishSlider() {
  return (
    <TopSlider>
        <TopSliderLanguageContainer>
            English
        </TopSliderLanguageContainer>
        <SliderIcon />
        <TopSliderLanguageContainer>
            Somali
        </TopSliderLanguageContainer>


    </TopSlider>
  )
}

export default SomaliToEnglishSlider