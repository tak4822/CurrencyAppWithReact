import _ from 'lodash';
import React, { Component } from 'react';
import CountryTop from './CountryTop';
import CountryBottom from './CountryBottom';
import Btns from './Btns';
import countries from './countries';

class App extends Component {
  state = {
    countryTop: 'USD',
    numTop: '10',
    rateTop: 1,
    countryBottom: 'CAD',
    numBottom: '12',
    rateBottom: 1.2,
    focused: 'top',
    error: '',
    typable: true
  }

  focusEvent(focused){
    this.setState({focused});
  }

  clearAll(){
    this.setState({numTop: '0'});
    this.setState({numBottom: '0'});
    this.makeTypable();
  }

  readable(number){
    let Num = Math.round(number);
    if(Num >= 1000 ){
      try {
        Num = Number(Num).toLocaleString();
      } catch(err) {
        console.log('toLocale', err);
      }
    }
    return Num;
  }

  makeTypable(){
    this.setState({ typable: true });
    this.setState({ error: ''});
  }

  checkDigits(){
    this.setState({ error: ''});
    if(this.state.numTop.length > 15 || this.state.numBottom.length > 15 ){
      this.setState({ error: 'We do not allow to calculate more than 14 degits munbers'});
      this.setState({ typable: false });
      return false;
    }
  }

  changeNumTop(num, checkDig=true, checkAfter=false) {
    if(checkDig){
      this.checkDigits();
    }
    if(this.state.typable || !checkDig){
      this.setState({ numTop: this.readable(num) });
      let numBottom = Number(num) / this.state.rateTop * this.state.rateBottom;
      this.setState({ numBottom: this.readable(numBottom) });
    }
    if(checkAfter){
      this.checkDigits();
    }
  }

  changeNumBottom(num, checkDig=true, checkAfter=false) {
    if(checkDig){
      this.checkDigits();
    }
    if(this.state.typable || !checkDig){
      this.setState({ numBottom: this.readable(num) });
      let numTop =  Number(num) / this.state.rateBottom * this.state.rateTop;
      this.setState({ numTop: this.readable(numTop) });
    }
    if(checkAfter){
      this.checkDigits();
    }
  }

  consvertToNum(str) {
    str = str.toString();
    if ( str.indexOf(',')) {
      str = str.replace(/,/g, '');
    }
    return Number(str);
  }

  changeCountryTop(country) {
    this.setState({countryTop: country});
    let rateTop = _.map(countries, ({name, rate}) => {
      if (name === this.state.countryTop) {
        return rate;
      }
      return;
    }).join('');
    this.setState({ rateTop });

    const Num = this.consvertToNum(this.state.numTop);
    this.makeTypable();
    this.changeNumTop(Num,false,true);
  }

  changeCountryBottom(country) {
    this.setState({countryBottom: country});
    let rateBottom = _.map(countries, ({name, rate}) => {
      if (name === this.state.countryBottom) {
        return rate;
      }
      return;
    }).join('');
    this.setState({ rateBottom });
    const Num = this.consvertToNum(this.state.numBottom);
    this.makeTypable();
    this.changeNumBottom(Num,false,true);
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="headerTitle">
            <img className="logo" src="/img/logo.svg" alt="currency calculator"/>
            <h1>Currency Calculator</h1>
          </div>

          <p className="errorMessage">{this.state.error}</p>
        </div>
        <CountryTop
          country={this.state.countryTop}
          num={this.state.numTop}
          changeCountryTop={this.changeCountryTop.bind(this)}
          changeNumTop={this.changeNumTop.bind(this)}
          focused={this.state.focused}
          setFocus={this.focusEvent.bind(this)}
        />
        <CountryBottom
          country={this.state.countryBottom}
          num={this.state.numBottom}
          changeCountryBottom={this.changeCountryBottom.bind(this)}
          changeNumBottom={this.changeNumBottom.bind(this)}
          focused={this.state.focused}
          setFocus={this.focusEvent.bind(this)}
        />
        <Btns
          focused={this.state.focused}
          changeNumTop={this.changeNumTop.bind(this)}
          changeNumBottom={this.changeNumBottom.bind(this)}
          numTop={this.state.numTop}
          numBottom={this.state.numBottom}
          makeTypable={this.makeTypable.bind(this)}
          clearAll={this.clearAll.bind(this)}
        />
      </div>
    );
  }
}

export default App;
