import React from 'react';
import Cards from 'react-credit-cards';
import { connect } from 'react-redux';

import {handleInputChange}from './redux/action';
import {handleInputChangeNumber}from './redux/action';
import {handleInputFocus} from './redux/action';
// import { Field, reduxForm } from 'redux-form';
import '../node_modules/react-credit-cards/es/styles-compiled.css';
import './App.css';

class App extends React.Component{
  formatNumber = () => {
    
    let number = this.props.formValues.number;
    for (let i = 1; i < (number.length / 4); i++) {
      const space_index = (i * 4) + (i - 1);
      number = `${number.slice(0, space_index)} ${number.slice(space_index)}`;
    }
    return number;
  }
  render(){
    return (
      <div className="whole-page"> 
        <div id="PaymentForm">
          <div id="card">
            <Cards
              cvc={this.props.formValues.cvc}
              expiry={this.props.formValues.expiryMonth + this.props.formValues.expiryYear}
              focused={this.props.formValues.focus}
              name={this.props.formValues.name}
              number={this.props.formValues.number}>
            </Cards>
          </div>
          
          <div className="ui container" id="formSection">
            <form className="ui form form-custom"> 
              <div className="field row">
                <label>
                  Card Number
                </label>
                <div className="field">
                  <input
                    type="tel"
                    name="number"
                    placeholder="Card Number"
                    onChange={this.props.handleInputChangeNumber}
                    onFocus={this.props.handleInputFocus}
                    value={this.formatNumber()}
                  />
                </div>
              </div>
              <div className="field">
                <label>
                  Name
                </label>
                <div className="field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={this.props.handleInputChange}
                    onFocus={this.props.handleInputFocus}
                    value={this.props.formValues.name}
                  />
                </div>
              </div>
              <div className="two fields">
                <div className="field">
                    <label>
                      Expiry
                    </label>
                    <div className="two fields">
                    <div className="field">
                      {/* <input
                        type="text"
                        name="expiry"
                        placeholder="Expiration Date"
                        onChange={this.props.handleInputChange}
                        onFocus={this.props.handleInputFocus}
                        value={this.props.formValues.expiry}
                      /> */}
                      <select 
                        className="ui search dropdown" 
                        name="expiryMonth"
                        onChange={this.props.handleInputChange}
                        onFocus={this.props.handleInputFocus}
                        >
                        <option value="">Month</option> 
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                    </div>
                    <div className="field">
                      <select 
                        className="ui search dropdown" 
                        name="expiryYear"
                        onChange={this.props.handleInputChange}
                        onFocus={this.props.handleInputFocus}>
                          <option value="">Year</option> 
                          <option value="20">2020</option>
                          <option value="21">2021</option>
                          <option value="22">2022</option>
                          <option value="23">2023</option>
                          <option value="24">2024</option>
                          <option value="25">2025</option>
                          <option value="26">2026</option>
                          <option value="27">2027</option>
                          <option value="28">2028</option>
                          <option value="29">2029</option>
                          <option value="30">2030</option>
                        </select>
                    </div>

                  </div>
                </div>          
                <div className="field">
                  <label>
                    CVC
                  </label>
                  <div className="field">
                    <input
                      type="text"
                      name="cvc"
                      placeholder="CVC"
                      onChange={this.props.handleInputChange}
                      onFocus={this.props.handleInputFocus}
                      value={this.props.formValues.cvc}
                    />
                  </div>
                </div>
              </div>
              <div className="ui submit blue fluid button">Submit</div>
            </form>

          </div>
          
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    formValues: state
  }
}

export default connect(mapStateToProps, 
  {handleInputFocus, handleInputChange, handleInputChangeNumber})
  (App);
