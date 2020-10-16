import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { AppBar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
 
    
    checked: {color:"blue"},
  },
  formControl: {
    margin: theme.spacing(2),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    Bar: false,
    Sauna:false,
    Jardin: false,
    Terrasse:false,
    Bain:false,
    Connexion:false,
    Plage:false,
     Borne:false,
    Piscine:false,
    Parking:false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { Bar, Sauna, Jardin, Terrasse,Bain,Connexion,Plage,Borne,Piscine,Parking } = state;
  //const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
        
  
      <FormControl component="fieldset" className={classes.formControl}>
          
        <FormLabel component="legend" className="text-2ml font-bold mt-10 pl-10 ml-10">Quels équipements proposez-vous ?
         </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={Bar} onChange={handleChange} name="Bar" />}
            label="Bar"
          />
          <FormControlLabel
            control={<Checkbox checked={Sauna} onChange={handleChange} name="Sauna" />}
            label="Sauna"
          />
          <FormControlLabel
            control={<Checkbox checked={Jardin} onChange={handleChange} name="Jardin" />}
            label="Jardin"
          />
          <FormControlLabel
            control={<Checkbox checked={Terrasse} onChange={handleChange} name="Terrasse" />}
            label="Térrasse"
          />
          <FormControlLabel
          control={<Checkbox checked={Bain} onChange={handleChange} name="Bain" />}
          label="Bain à reumous/Jacuzzi"
        />
            <FormControlLabel
            control={<Checkbox checked={Connexion} onChange={handleChange} name="Connexion" />}
            label="Connexion Wi-Fi gratuite"
        />
        <FormControlLabel
            control={<Checkbox checked={Plage} onChange={handleChange} name="Plage" />}
            label="Plage"
        />
            <FormControlLabel
            control={<Checkbox checked={Borne} onChange={handleChange} name="Borne" />}
            label="Borne de recharge pour voiture électrique"
        />
            <FormControlLabel
            control={<Checkbox checked={Piscine} onChange={handleChange} name="Piscine" />}
            label="Piscine"
        />
               <FormControlLabel
            control={<Checkbox checked={Parking} onChange={handleChange} name="Parking" />}
            label="Parking"
        />
        </FormGroup>
       
      </FormControl>
     
    </div>
  );
}


