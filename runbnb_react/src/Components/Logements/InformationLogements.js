import React from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const InformationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Champs obligatoire'),
    type: Yup.string()
      .required('champs obligatoire'),
    categorie: Yup.string().required('Required'),
});

class InformationLogements extends React.Component {
    render() {
      return (
        <Formik
         initialValues={{
           name: '',
           type: '',
           categorie: '',
         }}
         validationSchema={InformationSchema}
         onSubmit={values => {
           this.props.setEtape(2)
           console.log(values)
         }}
       >
         {({ values, errors, touched, setFieldValue }) => (
           <Form>
            <div className="px-8 py-4">
              <div className="w-full mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                  Quel est le nom de votre hébergement?
                </label>
                <Field name="name" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Nom de l'hébergement" />
                { errors.name && touched.name ? (
                  <div>{errors.name}</div>
                ) : null }
              </div>
              
              <div className="w-full mb-6 md:mb-0">
              <h1 className="text-2xl font-bold">Incrivez votre hebergement et commencer à  recevoir des clients en un rien de temps</h1>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                  Choisissez le type d’hébergement que vous souhaitez inscrire sur RunBnB
                </label>
                <div className="relative">
                  <select onChange={(event) => setFieldValue('type', event.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
              </div>
  
              <div className="w-full mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                  Que peuvent réserver les clients ?
                </label>
                <div className="relative">
                  <select onChange={(event) => setFieldValue('categorie', event.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option value="Chambre privé">Chambre privé</option>
                    <option value="Hébergement entier">Hébergement entier</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
           
            </div>
          </Form>
         )}
       </Formik>
      )
    }
  }
  
export default InformationLogements;