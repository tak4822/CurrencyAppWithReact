import React, { Component } from 'react';

class Btns extends Component {

  handleClick(button) {
    if(!isNaN(button)){
      switch(this.props.focused){
        case 'top':
          let numTop = this.props.numTop.toString();
          if ( numTop.indexOf(',')) {
            numTop = numTop.replace(/,/g, '');
          }
          let numTopStr = numTop + button.toString();
          this.props.changeNumTop(Number(numTopStr));
          break;
        case 'bottom':
          let numBottom = this.props.numBottom.toString();
          if ( numBottom.indexOf(',')) {
            numBottom = numBottom.replace(/,/g, '');
          }
          let numBottomStr = numBottom + button.toString();
          this.props.changeNumBottom(Number(numBottomStr));
          break;
        default:
          console.log('no focused input');
          break;
      }
    } else if(button === 'delete') {
      switch(this.props.focused){
        case 'top':
          let numTop = this.props.numTop.toString();
          if ( numTop.indexOf(',')) {
            numTop = numTop.replace(/,/g, '');
          }
          let numTopStr = numTop.substring(0, numTop.length - 1);
          this.props.makeTypable();
          this.props.changeNumTop(Number(numTopStr), false, false);
          break;
        case 'bottom':
          let numBottom = this.props.numBottom.toString();
          if ( numBottom.indexOf(',')) {
            numBottom = numBottom.replace(/,/g, '');
          }
          let numBottomStr = numBottom.substring(0, numBottom.length - 1);
          this.props.makeTypable();
          this.props.changeNumBottom(Number(numBottomStr),false, false);
          break;
        default:
          console.log('no focused input');
          break;
      }
    } else if (button === 'ac'){
      this.props.clearAll();
    }
  }

  render(){
    return(
      <div className="btns">
        <div className="currencyBtn" onClick={() => this.handleClick(1)}>
          <div className="innerbutton">1</div>
        </div>
        <div className="currencyBtn" onClick={() => this.handleClick(2)}>
          <div className="innerbutton">2</div>
        </div>
        <div className="currencyBtn" onClick={() => this.handleClick(3)}>
          <div className="innerbutton">3</div>
        </div>
        <div className="currencyBtn" onClick={() => this.handleClick(4)}>
          <div className="innerbutton">4</div>
        </div>
        <div className="currencyBtn" onClick={() => this.handleClick(5)}>
          <div className="innerbutton">5</div>
        </div>
        <div className="currencyBtn" onClick={() => this.handleClick(6)}>
          <div className="innerbutton">6</div>
        </div>
        <div className="currencyBtn" onClick={() => this.handleClick(7)}>
          <div className="innerbutton">7</div>
        </div>
        <div className="currencyBtn" onClick={() => this.handleClick(8)}>
          <div className="innerbutton">8</div>
        </div>
        <div className="currencyBtn" onClick={() => this.handleClick(9)}>
          <div className="innerbutton">9</div>
        </div>
        <div className="currencyBtn" onClick={() => this.handleClick('ac')}>
          <div className="innerbutton">AC</div>
        </div>
        <div className="currencyBtn" onClick={() => this.handleClick(0)}>
          <div className="innerbutton">0</div>
        </div>
        <div className="currencyBtn" onClick={() => this.handleClick('delete')}>
          <div className="innerbutton">
            <img src="/img/delete.svg" alt="delete" />
          </div>
        </div>

      </div>
    );
  };
}

export default Btns;
