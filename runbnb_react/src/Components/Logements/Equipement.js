import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    Bar: true,
    Sauna:true,
    Jardin: true,
    antoine:true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { Bar, Sauna, Jardin, antoine } = state;
  //const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
          
        <FormLabel component="legend">Assign responsibility</FormLabel>
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
            control={<Checkbox checked={antoine} onChange={handleChange} name="Terrasse" />}
            label="Terrasse"
          />
          <FormControlLabel
          control={<Checkbox checked={antoine} onChange={handleChange} name="Bain à reumous/Jacuzzi" />}
          label="Bain à reumous/Jacuzzi"
        />
            <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="Connexion Wi-Fi gratuite" />}
            label="Connexion Wi-Fi gratuite"
        />
        <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="Plage" />}
            label="Plage"
        />
            <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="Borne de recharge pour voiture électrique" />}
            label="Borne de recharge pour voiture électrique"
        />
            <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="Piscine" />}
            label="Piscine"
        />
               <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="Parking" />}
            label="Parking"
        />
        </FormGroup>
       
      </FormControl>
     
    </div>
  );
}


