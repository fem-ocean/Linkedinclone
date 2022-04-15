import './App.css';
import Login from './Components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import { useEffect } from 'react';
import { getUserAuth } from './actions'
import { connect } from 'react-redux';


function App(props) {
  useEffect(() =>{
    props.getUserAuth();
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          
          <Route exact path="/">
            <Login />
          </Route>
                          
          <Route exact path="/home">
            <Header />
            <Home />
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}


const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth())
})



export default connect(mapStateToProps, mapDispatchToProps)(App);
