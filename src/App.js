import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';


function App() {
  return (
    <BrowserRouter className="App">
    <Navbar/>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/all-user' component={AllUser}/>
    <Route path='/add-user' component={AddUser}/>
    <Route component={NotFound}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
