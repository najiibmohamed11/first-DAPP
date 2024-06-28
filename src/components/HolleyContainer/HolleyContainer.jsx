import React from 'react'
import SomaliToEnglishSlider from '../SomaliToEnglishSlider/SomaliToEnglishSlider'
import TextAreaContainer from '../TextAreas/TextAreas'
import styled from 'styled-components'
import TranslateBtn from '../translateBtn/TranslateBtn'

 const TextInputs = styled.div`
display: flex;
justify-content: space-between;
margin-top: 20px;
 `
export default function HolleyContainer() {
  return (
    <div>
           <SomaliToEnglishSlider/>
           <TextInputs>
           <TextAreaContainer/>
           <TextAreaContainer/>
           </TextInputs>
           <TranslateBtn/>
         
    </div>
  )
}
