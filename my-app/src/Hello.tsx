import * as React from 'react';
import './Hello.css';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    
}
  
class Hello extends React.Component<Props, object> {
    public render() {
      const { name, enthusiasmLevel = 1 } = this.props;

      if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic.');
      }
      
      return (
        <div className="hello">
          <div className="greeting">
              Hello {name + this.getExclamationMarks(enthusiasmLevel)}
          </div>
        </div>
      );
    }
    public getExclamationMarks(numChars: number): any {
      return Array(numChars + 1).join('!');
    }
    
}

export default Hello;