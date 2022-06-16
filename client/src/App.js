import { Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Inicio from './components/inicio/Inicio';

function App() {
  return (
    <div className="App">
      
    <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/inicio" component={Home} />
    </Switch>
    </div>
  );
}

export default App;
