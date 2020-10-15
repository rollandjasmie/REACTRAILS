import React from 'react';

/*import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';*/
import InformationLogements from '../Logements/InformationLogements';
import Localisation from '../Logements/Localisation';
import Chambres from '../Logements/Chambres';
import MapContainers from '../Logements/MapContainers'
// import Map from '../Logements/Map';
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
          return <Chambres/>;
      case 4:
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
      <button  class="bg-blue-500 hover:bg-blue-700 text-white pl-6 pr-6 font-bold py-2 px-4 ml-10 rounded" onClick={nextStep}>Suivant</button>


    </>
  );
}


