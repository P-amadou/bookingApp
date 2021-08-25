import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import Formulaire from './components/form';
import Test from './components/test';

function App() {
  return (
      <div className="App" >
      <Router>
        <Switch>
      
          <Route path='/' exact component={Formulaire}/>
          <Route path='/test' exact component={Test}/>

        </Switch>
      </Router>
      </div>
  );
}

export default App;
