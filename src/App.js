import React from 'react';
// import 'antd-mobile/dist/antd-mobile.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Routers from './routerMap';
import Login from './containers/Login';
import './App.scss';

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={Login}/>
            {Routers.map((item, index) => {
                return (<Route path={item.path} key={index} exact render={props => (
                    localStorage.getItem('WECHAT_NICKNAME') ? <item.component {...props}/> : 
                    <Redirect to={{
                        pathname: '/'
                    }} />
                )} />)
            })}
       </Switch>
    </Router>
  );
}

export default App;
