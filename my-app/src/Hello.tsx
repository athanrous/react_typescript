import * as React from 'react';
import './Hello.css';

export interface State {
  displaySubject: string;
  subject: string;
}

export interface Props{
  name: string;
}

class Greeter extends React.Component<Props, State> {

  public state = {
    displaySubject: '',
    subject: ''
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
  }

  public handleClick() {
    this.setState({displaySubject: this.state.subject});
  }

  public handleSubjectChange(event) {
    this.setState({subject:event.target.value});
  }

  public render() {
    return (
      <div>
        <SubjectInput name={this.state.subject} onClick={this.handleClick} onChange={this.handleSubjectChange} />
        <Greeting name={this.state.displaySubject} />
      </div>
    );
  }
}

function SubjectInput(props){
  return (
    <div>
      <input type="text" onChange={props.onChange}/>
      <button onClick={props.onClick}> Click Me! </button>
    </div>
  );
}

function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Greeter;
