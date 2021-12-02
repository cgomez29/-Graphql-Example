import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BookList from './components/BookList'
import BookForm from './components/BookForm'
import Navbar from './components/Navbar'

import 'bootswatch/dist/lux/bootstrap.min.css'
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <div className="container p-4">
          <Switch>
            <Route exact path="/" component={BookList}/>
            <Route exact path="/new-message" component={BookForm}/>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
