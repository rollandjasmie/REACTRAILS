
import React from 'react';
import { Formik, Form, Field } from 'formik';
import TimeField from 'react-simple-timefield';



class Regle extends React.Component {
 
  render() {
    return (
   <Formik
              initialValues={this.props.formValue.regles}
              onSubmit={values => {
                 let { formValue, setFormValue } = this.props;
                 formValue = {...formValue, regles: values};
                 setFormValue(formValue);

                 this.props.nextStep();
                 console.log(formValue)
              }}
          >
         {({ values, errors,handleSubmit, touched, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <div className="element mt-5 pl-10 ml-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10 ">
                 <div className="">
                    <label>
                      <Field type="checkbox" name="regle" value="Hébergement fumeurBar"/>
                      Hébergement fumeur
                    </label><br></br>
                    <label>
                      <Field type="checkbox" name="regle" value="Animaux  admisdomestique"/>
                      Animaux  admisdomestique
                    </label><br></br>
                    <label>
                      <Field type="checkbox" name="regle" value="Enfant bienvenus" />
                      Enfant bienvenus
                    </label><br></br>
                    <label>
                      <Field type="checkbox" name="regle" value="Terrasse" />
                      Fête / évènements autorisés
                    </label><br></br>
                  </div>
                <div>
                  <div>
                  <h2>Arrivé</h2>
                    <label>
                    <Field type="time" name="arrive1"  min="01:00" max="23:00"/>   
                    </label>
                    <label>
                      <Field type="time" name="arrive2"  min="01:00" max="23:00"/>   
                    </label>
                  </div>
                  <div>
                    <h2>Départ</h2>
                    <label>
                    <Field type="time" name="depart1" min="01:00" max="23:00"/>   
                    </label>
                    <label>
                      <Field type="time" name="depart2"  min="01:00" max="23:00"/>   
                    </label>
                  </div>
                </div>
              </div> 
              <div className="flex items-end justify-end">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1" onClick={this.props.previousStep}>Précedent</button>
                  <button  class="bg-blue-500 hover:bg-blue-700 text-white pl-6 pr-6 font-bold py-2 px-4 rounded" type="submit">Suivant</button>
              </div>

            </Form>
         )}
     </Formik>
    )
  }
}

export default Regle;