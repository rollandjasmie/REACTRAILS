import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Field, Form } from 'formik';

const Checkboxregle = () => (
    <div>
        <label> Règle de la maison</label>
      <Formik
        initialValues={{
          regle:'',
        }}
      >

          <Form>
              <div className=" w-auto flow-root col-3 border-2 center">
          <label>
             <Field type="checkbox" name="regle" value=" Hébergement Fumeur
" />
             Hébergement Fumeur
           </label>
           <label>
             <Field type="checkbox" name="regle" value=" Animaux domestique admis
" />
             Animaux domestique admis
           </label>
           <label>
             <Field type="checkbox" name="regle" value="  Enfant bienvenus" />
             Enfant bienvenus
           </label>
           <label>
             <Field type="checkbox" name="regle" value="   Fête / évènements autorisés" />
             Fête / évènements autorisés
           </label>
            <div className="">
                    <Timepiker/>
            </div>
           </div>
          </Form>

      </Formik>
      </div>
)
export default Checkboxregle;