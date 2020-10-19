
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',

  
  },
  root: {
    display: 'flex',},

    formControl: {
      margin: theme.spacing(3),
    },
  
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();


  return (
    <div className=" w-1/2 mt-10 ml-20 bg-white shadow-md rounded h-screen">
    <div className="mt-2 font-bold ml-4 font-22">Rèlgle de maison</div>
    <div className="{classes.root} .w auto mt-2">
      <FormControl  className={classes.formControl}>
        <FormGroup className="float-right">
          <FormControlLabel
            control={<Checkbox   name="regle" />}
            label="Hébergement fumeur"
           
          />
          <FormControlLabel
            control={<Checkbox  name="regle" />}
            label="Animaux domestique admis"
          />
          <FormControlLabel
            control={<Checkbox   name="regle" />}
            label="Enfant bienvenue"
          />
           <FormControlLabel
            control={<Checkbox  name="regle" />}
            label="Fêtes/événements autorisés"
          />
        </FormGroup>

        
      </FormControl>
      <div className=" flex-4  mb-4 ml-3">
        <div className=''>
            <h2>Arrivé</h2> 
            <h2>De</h2> 
            <TextField
              id="time"
              h1="Arrivé"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          
            <TextField
              id="time"
              h1="Arrivé"
              type="time"
              defaultValue="07:45"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
        </div> 
          <div className="mt-10">
            <h2>Depart</h2>
            <h2>De</h2>

            <TextField
              id="time"
              h1="Arrivé"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
            <TextField
              id="time"
              h1="Arrivé"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </div>
      </div>
      </div>
    </div>
  );
}

 