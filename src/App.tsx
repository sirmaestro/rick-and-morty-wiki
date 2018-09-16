import * as React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends React.Component<{}> {
  public render() {
    return (
      <div className="container-fluid">
      <div className="centreText">
        {/* React components must have a wrapper node/element */}
        <SearchBar/>
      </div>
    </div>
    );
  }
}

export default App;
