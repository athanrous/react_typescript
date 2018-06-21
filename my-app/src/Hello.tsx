import * as React from 'react';
import './Hello.css';

export interface State {
  field: string;
}

export interface Props{
  name: string;
}

class Greeter extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.state = {field: ''};
  }

  public componentDidMount() {
    this.setState({field: ''});
  }

  public handleClick() {
    this.setState({field: this.state.field});
  }

  public updateInputValue(evt){
    this.state = {field: evt.target.value};
  }

  public render() {
    return (
      <div>
        <SubjectInput name={this.state.field} onClick={this.handleClick} onChange={this.updateInputValue} />
        <Greeting name={this.state.field} onChange={this.updateInputValue}/>
      </div>
    );
  }
}

function SubjectInput(props){
  return (
    <div>
      <input type="text" onChange={props.onChange}/>
      <button onClick={props.onClick}> Click me! </button>
    </div>
  );
}

function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Greeter;
