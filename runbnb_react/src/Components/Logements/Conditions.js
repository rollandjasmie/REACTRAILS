import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

class Conditions extends React.Component {
  render() {
    return (

     < div className="w-auto on inline-block element h-200 pl-10 ml-10 mt-20  bg-white shadow-md rounded px-8 pt-20 pb-8 mb-10">
        <Formik
        initialValues={{
          conditions: '',
        }}
        onSubmit={values => {
          let { formValue, setFormValue } = this.props;

          formValue = {...formValue, conditions: values};

          setFormValue(formValue);

          console.log(formValue);

          this.props.nextStep();
       }}
        >
          <Form>
            <div role="group" >
              <label>
                <Field type="radio" name="conditions" value="1 jours" />
                1 jours
              </label>
              <label>
                <Field type="radio" name="conditions" value="1 jours" />
                7 jours
              </label>
              <label>
                <Field type="radio" name="conditions" value="1 jours" />
                14 jours
              </label>
              <label>
                <Field type="radio" name="conditions" value="1 jours" />
                30 jours
              </label>
            </div>
            <div className="flex items-end justify-end">
              <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-1" onClick={this.props.previousStep}>Précedent</button>
              <button  class="bg-orange-500 hover:bg-orange-700 text-white pl-6 pr-6 font-bold py-2 px-4 rounded" type="submit">Suivant</button>
            </div>
          </Form>
        </Formik>
        </div>
        
    )
  }
}

export default Conditions;