
 
import React from 'react';
import { Formik, Form, Field } from 'formik';
import TimeField from 'react-simple-timefield';
import * as Yup from 'yup';

const InformationSchema = Yup.object().shape({
    arrive1: Yup.string()
      .required('Champs obligatoire'),
    arrive2: Yup.string()
      .required('Champs obligatoire'),
    depart1: Yup.string().required('Champs obligatoire'),
    depart2: Yup.string().required('Champs obligatoire'),
});



class Regle extends React.Component {
 
  render() {
    return (
   <Formik
              initialValues={this.props.formValue.regles}
              validationSchema={InformationSchema}
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
              <div className=" w-1/3 element mt-5 pl-10 ml-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10 ">
                <p className="text-2ml font-bold  mb-10 "> Régle de la maison</p>
                 <div className="">
                    <label>
                      <Field className=" mr-2 "type="checkbox" name="regle" value="Hébergement fumeurBar"/>
                      Hébergement fumeur
                    </label><br></br>
                    <label>
                      <Field className="mr-2 " type="checkbox" name="regle" value="Animaux  admisdomestique"/>
                      Animaux  admisdomestique
                    </label><br></br>
                    <label>
                      <Field  className="mr-2" type="checkbox" name="regle" value="Enfant bienvenus" />
                      Enfant bienvenus
                    </label><br></br>
                    <label>
                      <Field  className="mr-2 " type="checkbox" name="regle" value="Terrasse" />
                      Fête / évènements autorisés
                    </label><br></br>
                  </div><br></br>
                  <hr></hr>
                <div className="my-5">
                  <span>
                    <h2 className="text-md font-bold">Arrivé</h2>
                    <h2 className="my-2 text-sm font-medium">De</h2>
                    <label>
                    <Field  className="mt-3 "type="time" name="arrive1"  min="01:00" max="23:00"/>   
                      {/* { errors.arrive1 && touched.arrive1 ? (
                        <div className="text-red-600 text-sm font-bold">{errors.arrive1}</div>
                      ) : null } */}

                    <span className="ml-20 mr-20 text-sm font-medium">à</span>
                 
                          <Field  className="" type="time" name="arrive2"  min="01:00" max="23:00"/>   
                        </label>
              
                    </span>
                  <span>
                      <h2 className="text-md font-bold pt-4">Départ</h2>
                      <h2 className="my-2 text-sm font-medium">De</h2>
                      <label>
                      <Field  className="mt-3" type="time" name="depart1" min="01:00" max="23:00"/>   
                  
                          
                      <span className="ml-20 mr-20 text-sm font-medium">à</span>
                  
                        <Field className=""type="time" name="depart2"  min="01:00" max="23:00"/>   
                      </label>
                  </span>
                </div>
                <div className="flex items-end justify-end pt-10">
                  <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-1" onClick={this.props.previousStep}>Précedent</button>
                  <button  class="bg-orange-500 hover:bg-orange-700 text-white pl-6 pr-6 font-bold py-2 px-4 rounded" type="submit">Suivant</button>
              </div>
              </div> 
        

            </Form>
         )}
     </Formik>
    )
  }
}

export default Regle;