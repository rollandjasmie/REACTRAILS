import React from 'react';
import InformationLogements from '../Logements/InformationLogements';
import Localisation from '../Logements/Localisation';
import MapContainers from '../Logements/MapContainers';
import StepProgress from './components/StepProgress';





export default function CustomizedSteppers() {
  const [activeStep, setActiveStep] = React.useState(0);
  

  const nextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const previousStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = () => {
    switch (activeStep) {
      case 0:
        return <InformationLogements/>;
      case 1:
        return <Localisation/>;
      case 2:
        return <MapContainers />;    
  
      default:
        return 'Carte ny ato ...';
    }
  }

  const stepList = [{
    title: 'Information Logement',
    sections: [{
      step: 0
    }, {
      step: 1
    }, {
      step: 2
    }]
  }, {

    title: 'Map',
    sections: [{
      step: 3
    }, {
      step: 4
    }, {
      step: 5
    }]
  }]

  return (
    <>
      <StepProgress stepList={stepList} activeStep={activeStep} />
      { getStepContent() }
      <button onClick={previousStep}>Précedent</button>
      <button onClick={nextStep}>Suivant</button>
    </>
  );
}
