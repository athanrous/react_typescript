import * as React from 'react';

export interface Props {
    name: string;
}
  
class Hello extends React.Component<Props, object> {
    public render() {
      const { name } = this.props;
      
      return (
        <div className="hello">
          <div className="greeting">
            <button onClick={this.showMessage(this.props.name)}> Click me! </button>
          </div>
        </div>
      );
    }
    
    public showMessage(name: any): any{
        return alert("Hello user, you learn coding in" + name);
    }
}

export default Hello;