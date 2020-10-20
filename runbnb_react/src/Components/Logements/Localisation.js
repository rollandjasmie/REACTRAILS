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
  
       validationSchema={LocalisationSchema}
        initialValues={this.props.formValue.localisation}

       onSubmit={values => {

          let { formValue, setFormValue } = this.props;

          formValue = {...formValue, localisation: values};

          setFormValue(formValue);

          console.log(formValue);

          this.props.nextStep();
       }}
     >
       {({ values, errors, touched, setFieldValue }) => (
         <Form>

        <div className=".w-auto on inline-block element mt-5 pl-10 ml-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10  ">
        <h1 className="text-2ml font-bold  mb-10 ">Où se situe l’hébergement que vous inscrivez ?</h1>
            <div class="w-full mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
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
              <Field name="adresse" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Adresse" />
              { errors.adresse && touched.adresse ? (
                <div>{errors.adresse}</div>
              ) : null }
            </div>

            <div className="w-full mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                  Adresse (ligne 2)
              </label>
              <Field name="adresse2 " class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Adresse" />
              { errors.adresse2   && touched.adresse2   ? (
                <div>{errors.adresse2  }</div>
              ) : null }
            </div>

            <div className="w-full mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                  code postal
              </label>
              <Field name="code" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Code Postal" />
              { errors.code  && touched.code  ? (
                <div>{errors.code }</div>
              ) : null }
            </div>

            <hr className="my-4"/> 
            <div className="flex items-end justify-end">

              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1" onClick={this.props.previousStep}>Précedent</button>
              <button  class="bg-blue-500 hover:bg-blue-700 text-white pl-6 pr-6 font-bold py-2 px-4 rounded" type="submit">Suivant</button>
            </div>
      
          </div>
        </Form>
       )}
     </Formik>
    )
  }
}

export default Localisation;