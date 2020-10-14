import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
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
// import Map from '../Logements/Map';
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
    title: 'Localisation'
  }, {
    title: 'Map',
    sections: [{
      step: 10
    }, {
      step: 11
    }, {
      step: 12
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
