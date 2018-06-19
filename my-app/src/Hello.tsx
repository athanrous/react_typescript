import * as React from 'react';
import './Hello.css';

class Hello extends React.Component<any,any> {
  constructor(props: any) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  public handleClick() {
    alert(this.state.inputfield);
  }

  public updateInputValue(evt){
    
    this.state={inputfield: evt.target.value};   

  }

  public render() {
    return (
      <div>
        <input type="text" onChange={this.updateInputValue}/> 
        <button onClick={this.handleClick}> Click </button>
      </div>   
    );
  }
}

export default Hello;