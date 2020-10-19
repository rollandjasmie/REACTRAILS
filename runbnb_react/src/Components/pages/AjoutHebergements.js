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
import Regle from '../Logements/Regle';
import MapContainers from '../Logements/MapContainers'
// import Map from '../Logements/Map';
import StepProgress from './components/StepProgress';
import EquipementContainers from '../Logements/EquipementContainers';
import CalendrierContainer from '../Logements/CalendrierContainer';
import Verification from '../Logements/Verification'







export default function CustomizedSteppers() {
  const [activeStep, setActiveStep] = React.useState(3);
  const [formValue, setFormValue] = React.useState({
    hebergement: {
      name: '',
      type: '',
      categorie: '',
    }
  });

  const nextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const previousStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const saveHebergement = () => {
    /*axios.post('/logement', formValue).then(response => {
      
    })*/
  }

  const getStepContent = () => {
    switch (activeStep) {
      case 0:
        return <InformationLogements 
                  nextStep={nextStep}
                  formValue={formValue}
                  setFormValue={setFormValue}/>;
      case 1:
        return <Localisation
                  previousStep={previousStep}
                  nextStep={nextStep}
                  formValue={formValue}
                  setFormValue={setFormValue}/>;
      case 2:
        return <MapContainers />;  
        case 3:
          return <Chambres/>;
      case 4:
        return <EquipementContainers/>
      case 5:
        return  console.log(< InformationLogements />);
        case 6:
          return <Regle/>
          case 7:
            return <CalendrierContainer/>
            case 8:
              return <Verification/>
        default:
          return <Chambres/>
       
      
      
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
    </>
  );
}


