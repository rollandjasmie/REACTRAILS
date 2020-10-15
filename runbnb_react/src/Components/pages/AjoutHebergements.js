import React from 'react';
import InformationLogements from '../Logements/InformationLogements';
import Localisation from '../Logements/Localisation';
import MapContainers from '../Logements/MapContainers';
import StepProgress from './components/StepProgress';
import EquipementContainers from '../Logements/EquipementContainers';





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
      case 3:
        return <EquipementContainers/>
      default:
        return 'Carte ny ato ...';
    }
  }

  const stepList = [{
    title: 'Nom et emplacement',
    sections: [{
      step: 0
    }, {
      step: 1
    }, {
      step: 2
    }]
  }, {
 
    title: "Configuration de l'hébergement",

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
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-10 rounded" onClick={previousStep}>Précedent</button>
      <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-10 rounded" onClick={nextStep}>Suivant</button>


    </>
  );
}
