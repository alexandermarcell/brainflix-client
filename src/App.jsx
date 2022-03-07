import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/Page/HomePage';
import UploadPage from './pages/Upload/UploadPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/videos/:id" component={HomePage} />
        <Route path="/upload" component={UploadPage} />
      </Switch>
    </Router>
  );
}


export default App;
