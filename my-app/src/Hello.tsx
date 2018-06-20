import * as React from 'react';
import './Hello.css';

export interface State {
  inputfield: string;
}

export interface Props{
  name: string;
}

class Hello extends React.Component<Props, State> {
  constructor(props) {
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
        <button onClick={this.handleClick}> {this.props.name} </button>
      </div>   
    );
  }
}

export default Hello;