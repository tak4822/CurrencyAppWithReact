import React, { Component } from 'react';


const style= {
  input: {
    fontSize: '2rem',
    textAlign: 'right',
    margin: 0,
    paddingTop: 8
  }

}

class CurrencyInput extends Component {
  componentDidMount(){
    if(this.props.input === 'top'){
      this.nameInput.focus();
    }
  }

  handleFocus(){
    this.props.setFocus(this.props.input);
  }

  handleChangeInput(e) {
    let value = e.target.value;
    if ( value.indexOf(',')) {
      value = value.replace(/,/g, '');
    }
    if( isNaN(value) ) {
      window.alert('type in number');
      return false;
    }
    this.props.changeNum(value);
  }
  render() {
    return (
        <input
          style={style.input}
          type="text"
          id={this.props.input}
          value={this.props.num}
          ref={(input) => { this.nameInput = input; }}
          onChange={this.handleChangeInput.bind(this)}
          onClick={this.handleFocus.bind(this)}
          readOnly="true"
        />
    );
  };
}

export default CurrencyInput
