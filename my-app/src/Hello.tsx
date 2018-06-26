import axios from 'axios';
import * as React from 'react';
import './Hello.css';

export interface GitHub {
  assignee: string,
  author_association: string,
  html_url: string,
  id: number,
  number: number,
  state: string,
  title: string,
  user: string,
  user_html: string,
  created_at: string,
  updated_at: string,
  label: string
}

export interface State {
  displaySubject: string;
  subject: string;
  issueData: Array<GitHub>;
}

export interface Props{
  name: string;
}

class Greeter extends React.Component<Props, State> {
  
  public state = {
    displaySubject: '',
    issueData: [],
    subject: '',
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
  }

  public handleClick() {
    this.setState({displaySubject: this.state.subject});
    axios.get('https://api.github.com/repos/Microsoft/TypeScript/pulls?state=open')
    .then(response => this.setState({issueData: response.data}))
  }

  public handleSubjectChange(event) {
    this.setState({subject:event.target.value});
  }
  
  public render() {
    return (
      <div>
        <SubjectInput name={this.state.subject} onClick={this.handleClick} onChange={this.handleSubjectChange} />
        <Greeting name={this.state.displaySubject} />
        <GitHub data={this.state.issueData}/>
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

function GitHub(props){
  return <h1> Github {props.data[0]} </h1>
}

export default Greeter;
