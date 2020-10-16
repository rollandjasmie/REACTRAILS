import React from 'react';

class IncrementComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      show: true,
      max: 5,
      min: 0
    };
  }

  IncrementItem = () => {
      this.setState(prevState => {
        if(prevState.quantity < 9) {
          return {
            quantity: prevState.quantity + 1
            
          }
        } else {
          return null;
        }
      });
  }
  DecreaseItem = () => {
    this.setState(prevState => {
      if(prevState.quantity > 0) {
        return {
          quantity: prevState.quantity - 1
        }
      } else {
        return null;
      }
    });
  }
  ToggleClick = () => {
    this.setState({
      show: !this.state.show
    });
  }
  handleChange = (event) => {
    this.setState({quantity: event.target.value});
  }

  render() {

    return ( <span className="float-right mr-20">
      <button className=" .rounded-3xl bg-primary hover:bg-grey-dark font-bold py-0 px-1 rounded-full rounded ml-4 shadow" onClick={this.IncrementItem}>+</button>
      <input className="w-10 justify-content-center" value={this.state.quantity} onChange={this.handleChange}/>
      <button className=" .rounded-3xl bg-primary hover:bg-grey-dark font-bold py-0 px-1 rounded-full rounded  shadow" onClick = {this.DecreaseItem}>-</button>
      </span>
    );
  }
}



  export default IncrementComponent ;