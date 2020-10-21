import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';



class InformationHeb extends React.Component {
  render() {
    return (
      <Formik
       initialValues={{
        info: false,
         pays: '',
         ville: '',
         adresse:'',
         code: '',
         adresse2: ''
       }}
     
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

          <div className="w-2/5 on inline-block element mt-5 pl-10 ml-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10  ">
          <h1 className="text-2ml font-bold  mb-10 ">Information sur l'hébergement</h1>
              <div class=" mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Vérifiez les informations sur votre hébergement :
                </label>
                <label class="block tracking-wide text-gray-700 text-xs py-3" >
                Si vous souhaitez modifier les informations,
                mieux vaut le faire maintenant. En effet, il est plus difficile de les mettre à jour pour la suite
                </label>
                <hr className="w-full"></hr>
            
              </div>

              <div className="my-5 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Adresse de l’hébergement
                </label>
                <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" for="grid-city">
                32 rue de Kenval, 97434, Saint Gilles les Bains
                </label>
                <hr className="w-full mt-5"></hr>

              </div>
              <div className="my-2 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Emplacement sur la carte
                </label>
                <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" for="grid-city">
                32 rue de Kenval, 97434, Saint Gilles les Bains
                </label>
                <hr className="w-full mt-5"></hr>
              
              </div>
              

              <div className="my-5 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Nom de l’hébergement
                </label>
                <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" for="grid-city">
                La Villa Nath - Saint Gilles les Bains
                </label>
                <hr className="w-full mt-5"></hr>
              
              </div>
              <div className="my-5 md:mb-0">
              
                <label className="block  tracking-wide text-gray-700 text-xs mb-2" for="grid-city">
                <input type="checkbox"></input>
                Je confirme que ces informations sont correctes
                </label>
              
                <hr className="w-full mt-5"></hr>
              
              </div>

          

            
              <div className="flex items-end justify-end">

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

export default InformationHeb;