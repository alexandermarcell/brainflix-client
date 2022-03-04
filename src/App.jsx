import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/Page/HomePage';
import Page from './pages/Page/Page';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/page" component={Page} />
      </Switch>
    </Router>
  );
}


export default App;
