import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import WorflowOptions from './components/WorflowOptions';
import Trigger from './components/Trigger';

// import Flow from './components/Flow';
// import UpdateNode from './components/updatenode';
import FlowBuild from './components/FlowBuild.tsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <WorflowOptions/>
      <Trigger/>
      <FlowBuild/>
    </div>
  );
}

export default App;
