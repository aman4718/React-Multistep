import './App.css';
import Firststep from './Components/Firststep';
import Secondstep from './Components/Secondstep';
import Thirdstep from './Components/Thirdstep';
import { Stepper,StepLabel,Step } from '@mui/material';
import { multistepContext } from './StepContext';
import { useContext } from 'react';
import DisplayData from './Components/DisplayData';

function App() {
   const {currentStep,finalData} = useContext(multistepContext);
   console.log('Loading data....',currentStep);
  function showStep(step) {
    switch(step) {
      case 1 : 
        return <Firststep/>
      case 2 : 
        return <Secondstep/>
      case 3 :
        return <Thirdstep/>
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{color:'red' , textDecoration:'underline'}}>React Js Multistep Application</h3>
        <div className='center-stepper'>
          <Stepper style={{width:'18%'}} activeStep={currentStep - 1} orientation='horizontal'>
            <Step>
                <StepLabel></StepLabel>
            </Step>
            <Step>
                <StepLabel></StepLabel>
            </Step>
            <Step>
                <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(currentStep)}
        <br/>
        {finalData.length > 0 ? <DisplayData/> : ''}
      </header>
    </div>
  );
}

export default App;
