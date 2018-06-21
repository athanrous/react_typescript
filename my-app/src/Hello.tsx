import * as React from 'react';
import './Hello.css';

export interface State {
  subject: string;
}

export interface Props{
  name: string;
}

class Greeter extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.state = {subject: ''};
  }

  public componentDidMount() {
    this.setState({subject: ''});
  }

  public handleClick() {
    this.setState({subject: this.state.subject});
  }

  public updateInputValue(evt){
    this.state = {subject: evt.target.value};
  }

  public render() {
    return (
      <div>
        <SubjectInput name={this.state.subject} onClick={this.handleClick} onChange={this.updateInputValue} />
        <Greeting name={this.state.subject} onChange={this.updateInputValue}/>
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
