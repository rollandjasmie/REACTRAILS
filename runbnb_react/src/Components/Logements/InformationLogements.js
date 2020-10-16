import React from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const InformationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Champs obligatoire'),
    type: Yup.string()
      .required('Champs obligatoire'),
    categorie: Yup.string().required('Required'),
});

class InformationLogements extends React.Component {
    render() {
      return (
        <Formik
         initialValues={this.props.formValue.hebergement}
         validationSchema={InformationSchema}
         onSubmit={values => {
            let { formValue, setFormValue } = this.props;

            formValue = {...formValue, hebergement: values};

            setFormValue(formValue);

            this.props.nextStep();
         }}
       >
         {({ values, errors, touched, setFieldValue }) => (
           <Form>

          
            <h1 className="text-2ml font-bold mt-10 pl-10 ml-10">Incrivez votre hebergement et commencer à  recevoir des clients en un rien de temps</h1>
            <div className=".w-auto on inline-block element mt-15 pl-10 ml-10   bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10">
              <div class="w-full mb-6 md:mb-0">

                <label class="block uppercase tracking-wide text-gray-700 text-xs  font-bold mb-2" for="grid-city">
                  Quel est le nom de votre hébergement?
                </label>
                <Field name="name" id="12" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Nom de l'hébergement" />
                { errors.name && touched.name ? (
                  <div>{errors.name}</div>
                ) : null }
              </div><br></br>
              
              <div class="w-full mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                  Choisissez le type d’hébergement que vous souhaitez inscrire sur RunBnB
                </label>
                <div className="relative">
                  <select onChange={(event) => setFieldValue('type', event.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>----Choisir le type----</option>
                    <option value="Appartement">Appartement</option>
                    <option value="Maison / Villa">Maison / Villa</option>
                    <option value="Hôtel">Hôtel</option>
                    <option value="Bungalow / Châlet">Maison / Villa</option>
                    <option value="Chambre d'hôte / Gîte">Hôtel</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                { errors.type && touched.type ? (
                  <div>{errors.type}</div>
                ) : null }
              </div><br></br>
  
              <div className="w-full mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                  Que peuvent réserver les clients ?
                </label>
                <div className="relative">
                  <select onChange={(event) => setFieldValue('categorie', event.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>----Choisir le type----</option>
                    <option value="Chambre privé">Chambre privé</option>
                    <option value="Hébergement entier">Hébergement entier</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                { errors.categorie && touched.categorie ? (
                  <div>{errors.categorie}</div>
                ) : null }
              </div>
              <hr className="my-4"/> 
              <div className="flex items-end justify-end">

                <button  class="bg-blue-500 hover:bg-blue-700 text-white pl-6 pr-6 font-bold py-2 px-4 rounded" type="submit">Suivant</button>
              </div>
            </div>
          </Form>
         )}
       </Formik>
      )
    }
  }
  
export default InformationLogements;