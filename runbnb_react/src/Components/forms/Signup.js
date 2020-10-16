import React from 'react';
import { Formik, Form, Field } from 'formik';
import NavbarUp from './Navbar/NavbarUp';


class Signup extends React.Component{
    render(){
      return(
     
        <Formik>
           <>
           <NavbarUp/>
            <div className="flex">
              <div className=" flex w-4/6 py-40 px-10">
                <h1 className="text-5xl w-4/6  font-bold ">Inscrivez votre <span className="text-orange-500">hébergement</span> sur Runbnb.com</h1>
              </div>
              


              <div className="  w-2/6 py-10 ">
              <div className=" w-11/12 bg-gray-100 border rounded ">
                
                    <form className="  px-10">
                      <h1 className="block tracking-wide text-gray-700 text-xl font-bold mb-2 my-5">Se connecter</h1>
                       
                        <label className="block tracking-wide text-gray-700 text-base font-bold mb-2 my-8" for="grid-city">
                         Adresse e-mail
                        </label>
                        <Field className="w-full appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3
                         px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Adresse e-mail "/>
                       
                        <label className="block tracking-wide text-gray-700 text-base font-bold mb-2 my-8" for="grid-city">
                        Mot de passe 
                        </label>
                        <input type="password" className="w-full appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3
                         px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder=" Mot de passe  " />

                        <button className="w-full appearance-none block  bg-orange-500 text-white rounded py-3
                         px-4 my-10 leading-tight focus:outline-none hover:font-bold">Se connecter</button> 

                         
                    </form>
              </div>
              </div>
              
            </div>        
      </>
        </Formik>
     
      )
    }
  }
  export default Signup;
  