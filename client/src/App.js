import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {Container} from 'semantic-ui-react'

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import MenuBar from './components/MenuBar'

function App() {
  return (
    <div className="App">
      {/* use npm run serve and npm start */}
      <Router>
        <Container>
        <MenuBar/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        </Container>
      </Router>
    </div>
  );
}

export default App;
