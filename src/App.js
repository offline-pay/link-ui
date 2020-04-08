import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from "./components/Login";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ForgotPassword from "./components/ForgotPassword";


class App extends Component {
    render() {
        return (<Router>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Switch>
                            <Route exact path='/' component={Login}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/reset" component={ForgotPassword}/>
                        </Switch>
                    </div>
                </div>
            </Router>)
    }
}

export default App