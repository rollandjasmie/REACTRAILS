import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import '../../App.css';
import classnames from 'classnames';




export default class Conditions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false};
  }
  
  click() {
    this.setState({active: true});
  }

  render() {let classes = classnames('specialbutton', {active: this.state.active});
    return (
      <>
       <p className="text-2ml font-bold  px-5 py-5 ">Quels équipements proposez-vous ?</p>
     < div className="w-2/4 on inline-block element h-200 pl-10 ml-10   bg-white shadow-md rounded px-8 pt-20 ">
     <p className="text-2ml  px-2  "><span className="uppercase">à</span> quelle dates les clients peuvent-ils annuler leur réservations ?</p>
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
            <div className="w-full flex py-5"    >
              <label className="{classes}  w-1/2  py-2 border border-orange-500 text-orange-500 text-center hover:bg-orange-500 
              hover:text-white hover:font-bold" onClick={this.click.bind(this)}>
                1 jours
                <Field className="hidden"  type="radio" name="conditions" value="1 jours" />
              </label>
              <label className=" w-1/2  py-2 border border-orange-500 text-orange-500 text-center hover:bg-orange-500 
              hover:text-white hover:font-bold">
                7 jours
                <Field className="hidden" type="radio" name="conditions" value="1 jours" />
              </label>
              <label className=" w-1/2  py-2 border border-orange-500 text-orange-500 text-center hover:bg-orange-500 
              hover:text-white hover:font-bold">
                14 jours
                <Field className="hidden" type="radio" name="conditions" value="1 jours" />
              </label>
              <label className=" w-1/2  py-2 border border-orange-500 text-orange-500 text-center hover:bg-orange-500
               hover:text-white hover:font-bold">
                30 jours
                <Field className="hidden" type="radio" name="conditions" value="1 jours" />
              </label>
            </div>
            <div className="flex items-end justify-end my-5">
              <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-1" onClick={this.props.previousStep}>Précedent</button>
              <button  class="bg-orange-500 hover:bg-orange-700 text-white pl-6 pr-6 font-bold py-2 px-4 rounded" type="submit">Suivant</button>
            </div>
          </Form>
        </Formik>
        </div>
       </> 
    )
  
      
      }
  }

