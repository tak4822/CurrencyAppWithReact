import React, { Component } from 'react';
import Selector from './Selector';
import CurrencyInput from './CurrencyInput';

class CountryBottom extends Component {
  render() {
    let border = '';
    if (this.props.focused === "bottom"){
      border = '2px solid #ffb81a';
    } else {
      border = 'none';
    }

    return (
      <div className="currencyBottom currency-common">
        <Selector country={this.props.country} changeCountry={this.props.changeCountryBottom}/>
        <div className="inputWrap" style={{borderBottom: border}}>
          <CurrencyInput
            num={this.props.num}
            changeNum={this.props.changeNumBottom}
            focused={this.props.focused}
            setFocus={this.props.setFocus}
            input="bottom"
          />
        </div>
      </div>
    );
  };
}

export default CountryBottom;
