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
import Reglecontainer from '../Logements/Reglecontainer';
import MapContainers from '../Logements/MapContainers'
// import Map from '../Logements/Map';
import StepProgress from './components/StepProgress';
import Equipement from '../Logements/Equipement';
import CalendrierContainer from '../Logements/CalendrierContainer';
import Conditions from '../Logements/Conditions'


import Uploadphoto from "../Logements/Uploadphoto";
import InformationHeb from "../Logements/InformationHeb";
import InfoRunbnb from '../Logements/InfoRunbnb';
import PageCharte from '../Logements/PageCharte';

export default function CustomizedSteppers() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formValue, setFormValue] = React.useState({
    hebergement: {
      name: '',
      type: '',
      categorie: '',
    },localisation:{
      pays: '',
      ville: '',
      adresse:'',
      code: '',
    },
    map:{
      longitude:"",
      latitude:""
    },
    lits:{},  
    canapes:{},
    autres:{},
      title: {},
  
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
        return <MapContainers 
                previousStep={previousStep}
                nextStep={nextStep}
                formValue={formValue}
                setFormValue={setFormValue}
                   />;
       
     
      case 3:  
              return  <Chambres
                  previousStep={previousStep}
                  nextStep={nextStep}
                  formValue={formValue}
                  setFormValue={setFormValue}
                  /> 
       

      case 4:
        return <Equipement
        previousStep={previousStep}
        nextStep={nextStep}
        formValue={formValue}
        setFormValue={setFormValue}/>

        case 5:
              return   <Reglecontainer
              previousStep={previousStep}
              nextStep={nextStep}
              formValue={formValue}
              setFormValue={setFormValue}
              />;    
        case 6:
              return  (<Uploadphoto />) ;
      
        
        case 7:
            return <Conditions/>
        case 8:
            return <CalendrierContainer/> 
        case 9:
              return <InformationHeb/>
        
        case 10:
             return <InfoRunbnb/>
        
       case 11:
              return <PageCharte/>            
    }
  }

  const stepList = [
  
    {
      title: 'Nom et emplacement',
      sections: [{
        step: 0
      }, {
        step: 1
      }, {
        step: 2
      }]
    }, 
    
    {
  
      title: "Configuration de l'hébergement",

      sections: [{
        step: 3
      }, {
        step: 4
      }, {
        step: 5
      }]
    },

     {
  
      title: "Photos",

      sections: [{
        step: 6
      }]
    },

    {
  
      title: "Révision et finalisation",

      sections: [{
        step: 9
      },{
        step: 10
      },{
        step: 11
      }]
    }

    
  
  


    
  
  ]

  return (
    <>
      <StepProgress stepList={stepList} activeStep={activeStep} />
      { getStepContent() }
    </>
  );
}


