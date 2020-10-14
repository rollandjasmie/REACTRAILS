import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LocalisationSchema = Yup.object().shape({
    pays: Yup.string()
      .required('Champs obligatoire'),
    ville: Yup.string()
      .required('Champs obligatoire'),
    adresse: Yup.string()
        .required('Champs obligatoire'),
    code : Yup.string()
        .required('Champs obligatoire')
});

class Localisation extends React.Component {
  render() {
    return (
      <Formik
       initialValues={{
         pays: '',
         ville: '',
         adresse:'',
         code: '',
         adresse2: ''
       }}
       validationSchema={LocalisationSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ values, errors, touched, setFieldValue }) => (
         <Form>
          <div className="px-8 py-4">
            <h1 className="text-2xl font-bold">Localisation</h1>
            <div className="w-full mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Pays
              </label>
              <Field name="pays" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Pays" />
              { errors.pays && touched.pays ? (
                <div>{errors.pays}</div>
              ) : null }
            </div>

            <div className="w-full mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Ville
              </label>
              <Field name="ville" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Ville" />
              { errors.ville && touched.ville ? (
                <div>{errors.ville}</div>
              ) : null }
            </div>

            <div className="w-full mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    Adresse (ligne 1)                  
              </label>
              <Field name="adresse" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Ville" />
              { errors.adresse && touched.adresse ? (
                <div>{errors.adresse}</div>
              ) : null }
            </div>

            <div className="w-full mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                  Adresse (ligne 2)
              </label>
              <Field name="adresse2 " className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Ville" />
              { errors.adresse2   && touched.adresse2   ? (
                <div>{errors.adresse2  }</div>
              ) : null }
            </div>

            <div className="w-full mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                  code postal
              </label>
              <Field name="code " className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Ville" />
              { errors.code  && touched.code  ? (
                <div>{errors.code }</div>
              ) : null }
            </div>

            <div>
              <button type="submit" className="bg-blue-400 hover:bg-blue-500 text-white rounded shadow-lg px-4 py-2">Etape Suivante</button>
            </div>
          </div>
        </Form>
       )}
     </Formik>
    )
  }
}

export default Localisation;