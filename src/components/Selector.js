import _ from 'lodash';
import React, { Component } from 'react';
import { Input } from 'react-materialize';
import countries from './countries';


class Selector extends Component {
  renderOption() {
    return _.map(countries, ({ name, imageSrc}) => {
      return <option
        key={name}
        value={name}
        data-icon={imageSrc}
        className="circle left"
        selected={this.props.country === name} >{name}</option>
    });
  }

  selectedCountryImage() {
    return _.map(countries, ({name, imageSrc }) => {
      if(name === this.props.country) {
        return imageSrc;
      }
      return ;
    }).join('');
  }

  handleChengeCountry(e) {
    this.props.changeCountry(e.target.value);
  }

  render() {
    return (
      <div className="input-field selectorWrap">
        <img className="selectedCountryImg" src={ this.selectedCountryImage() }  alt="selected country"/>
        <Input s={10} type='select' className="icons" onChange={this.handleChengeCountry.bind(this)}>
      		{ this.renderOption() }
      	</Input>
      </div>
    );
  };

}

export default Selector;
