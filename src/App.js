import './App.css';
import {connect} from 'react-redux';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Layout from './containers/layout/layout';
import Login from './containers/userLogin/UserLogin';
import Registration from './containers/userRegistration/UserRegistration';


function App(props) {
  let routes = (
    <Switch>
      <Route path="/registration" exact component={Registration}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/" exact component={Login}/>
      <Redirect to="/"/>
    </Switch>
  );
  
  if(props.logged){
    routes = (
      <Switch>
        <Route path="/layout" exact component={Layout}/>
        <Route path="/" exact component={Layout}/>
        <Redirect to="/"/>
      </Switch>
    );
  }
  return (
    <div className="App">
      {routes}
    </div>
  );
}


const mapStateToProps = state => {
  return {
    logged: state.logged
  };
};

export default withRouter(connect(mapStateToProps)(App));

