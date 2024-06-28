import { useState } from 'react'
import SomaliToEnglishSlider from './components/SomaliToEnglishSlider/SomaliToEnglishSlider'
import styled from 'styled-components'
import TextAreaContainer from './components/TextAreas/TextAreas'
import HolleyContainer from './components/HolleyContainer/HolleyContainer'
const HolleyApp=styled.div`
margin: 0 auto;
display: flex;
align-items: center;
height: 100vh;
justify-content: center;

`
function App() {

  return (
    <>
    <HolleyApp>
      <HolleyContainer/>
   

    </HolleyApp>
     
    </>
  )
}

export default App
