import React from 'react';
import { Formik, Form, Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../Charte.css';


class PageCharte extends React.Component {
  render() {
    return (
      <Formik
      initialValues={{
        acceptTerms: false
    }}
    validationSchema={Yup.object().shape({
      acceptTerms: Yup.bool().oneOf([true], 'les termes de conditions son requise')
  })}
  onSubmit={fields => {
      let { formValue, setFormValue } = this.props;
          this.props.saveHebergement();
          console.log(formValue);
          setFormValue(formValue);
  }}
     >
       {({ values, errors, touched, setFieldValue }) => (
         <Form className="flex justify-center">

        <div className="w-2/5 on inline-block element mt-5 pl-10 ml-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10  ">
        <h1 className="text-2ml font-bold  mb-10 ">Et voilà ! Vous avez fait tout le nécessaire afin de pouvoir accueillir
         vos premiers clients.</h1>
            <div class="  md:mb-0">
              <label class="block  tracking-wide text-gray-700 text-sm mb-2">
              Une fois votre inscription terminée, vous pourrez :
              </label>
              </div>
              <div class="  md:mb-0">
              <h1 class="block tracking-wide text-gray-700 text-sm px-3 font-bold" >
              <span className="font-black text-4xl">.</span>   Gérer votre hébergement à partir de votre tableau de bord
              </h1>
              </div> 
              <div class="  md:mb-0">
              <h1 class="block tracking-wide text-gray-700 text-sm px-3 font-bold" >
              <span className="font-black text-4xl">.</span>   Recevoir des réservations des clients qui se rendent sur notre
               site et gagner de l’argent
              </h1>
              </div> 
              <div class="  md:mb-0">                      
              <h1 class="block tracking-wide text-gray-700 text-sm px-3 font-bold" >
              <span className="font-black text-4xl">.</span>   Garder le contrôle des réservations de tous les sites sur 
              lesquelles vous êtes inscrit(e) en synchronisant votre calendrier
              </h1>                                              
            </div>

            <hr className="w-full my-5"></hr>

            <div className="flex ">
              <Field type="checkbox" name="acceptTerms" className={ (errors.acceptTerms && touched.acceptTerms  ? ' is-invalid' : '' )}></Field>
              <p className=" atteste text-sm ">J’atteste qu’il s’agit d’une activité d’hébergement légale disposant de
               toutes les autorisations nécessaires pouvant être présentées sur demande Runbnb.com </p>
            </div>
   
            <div className="flex py-4">
              <Field type="checkbox" name="acceptTerms" className={(errors.acceptTerms && touched.acceptTerms  ? ' is-invalid' : '')}></Field>
              <p className=" atteste2 text-sm ">J’ai lu et j’accepte les Conditions Générales de Runbnb.com</p>
              <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback flex-4" />
            </div>
           
           
            <div className="flex items-end justify-end py-5">
              <button  class="bg-orange-500 hover:bg-orange-700 text-white pl-6 pr-6 font-bold py-2 px-4 rounded" type="submit">Ouvrir votre hebergements</button>
            </div>
      
          </div>
        </Form>
       )}
     </Formik>
    )
  }
}

export default PageCharte;