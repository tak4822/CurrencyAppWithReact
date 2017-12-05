import React, { Component } from 'react';
import Selector from './Selector';
import CurrencyInput from './CurrencyInput';

class CountryTop extends Component {
    render() {
      let border = '';
      if (this.props.focused === "top"){
        border = '2px solid #ffb81a';
      } else {
        border = 'none';
      }

    return (
      <div className="currencyTop currency-common" >
        <Selector country={this.props.country} changeCountry={this.props.changeCountryTop}/>
        <div style={{borderBottom: border}} className="inputWrap">
          <CurrencyInput
            num={this.props.num}
            changeNum={this.props.changeNumTop}
            focused={this.props.focused}
            setFocus={this.props.setFocus}
            input="top"
          />
        </div>
      </div>
    );
  };
}

export default CountryTop;
