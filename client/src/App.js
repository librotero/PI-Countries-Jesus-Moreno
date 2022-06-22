import { Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Inicio from './components/inicio/Inicio';
import NewActivity from './components/Create/NewActivity';
import CountryDetail from './components/country/CountryDetail';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
    <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/home" component={Home} />
          <Route path='/newactivity' component={NewActivity}/>
          <Route path='/countries/:id' component={CountryDetail}/>
    </Switch>
    </div>
  );
}

export default App;
