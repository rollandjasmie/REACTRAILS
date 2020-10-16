import React from 'react';
import { Formik, Form, Field } from 'formik';
import Navbarin from './Navbar/Navbarin';


class SignIn extends React.Component{
    render(){
      return(
     
        <Formik>
           <>
           <Navbarin/>
            <div className="flex">
              <div className=" flex w-4/6 py-40 px-10">
                <h1 className="text-5xl w-4/6  font-bold ">Inscrivez votre <span className="text-orange-500">hébergement</span> sur Runbnb.com</h1>
              </div>
              


              <div className="  w-2/6 py-10 ">
              <div className=" w-11/12 bg-gray-100 border rounded ">
                
                    <form className="  px-10">
                      <h1 className="block tracking-wide text-gray-700 text-xl font-bold mb-2 my-5">Créer un profil partenaire</h1>
                        <label className="block tracking-wide text-gray-700 text-base font-bold mb-2 my-2" for="grid-city">
                         Nom
                        </label>
                        <Field className=" w-full  appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3
                         px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Nom " />

                        <label className="block tracking-wide text-gray-700 text-base font-bold mb-2 my-8" for="grid-city">
                       Prénom
                        </label>
                        <Field className="w-full appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3
                         px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Prénom " />

                        <label className="block tracking-wide text-gray-700 text-base font-bold mb-2 my-8" for="grid-city">
                         Adresse e-mail
                        </label>
                        <Field className="w-full appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3
                         px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Adresse e-mail "/>
                         <label className="block tracking-wide text-gray-500 text-xs my-3 " for="grid-city">
                         Entrez une adresse e-mail valide
                        </label>

                        <label className="block tracking-wide text-gray-700 text-base font-bold mb-2 my-8" for="grid-city">
                        Numéro de téléphone
                        </label>
                        <Field  className="w-full appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3
                         px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Téléphone " />
                           <label className="block tracking-wide text-gray-500 text-xs my-3 " for="grid-city">
                           Entrez une numéro de téléphone valide
                        </label>

                        <label className="block tracking-wide text-gray-700 text-base font-bold mb-2 my-8" for="grid-city">
                        Date de naissance 
                        </label>
                        <Field  className="w-full appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3
                         px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Date de naissance " />

                        <label className="block tracking-wide text-gray-700 text-base font-bold mb-2 my-8" for="grid-city">
                        Mot de passe 
                        </label>
                        <input type="password" className="w-full appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3
                         px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder=" Mot de passe  " />

                        <button className="w-full appearance-none block  bg-orange-500 text-white rounded py-3
                         px-4 my-10 leading-tight focus:outline-none hover:font-bold">Commencer</button> 

                         <p className="text-xs flex text-center">Vous  avez déja un compte ? Cliquez ici pour poursuivre l’inscription</p> 
                    </form>
              </div>
              </div>
              
            </div>        
      </>
        </Formik>
     
      )
    }
  }
  export default SignIn;
  