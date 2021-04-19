import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {Container} from 'semantic-ui-react'

import {AuthProvider} from './context/auth'

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import MenuBar from './components/MenuBar'

import AuthRoute from './util/AuthRoute';

function App() {
  return (
    <AuthProvider>
      {/* use npm run serve and npm start */}
      <Router>
        <Container>
        <MenuBar/>
        <Route exact path='/' component={Home}/>
        <AuthRoute exact path='/login' component={Login}/>
        <AuthRoute exact path='/register' component={Register}/>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
